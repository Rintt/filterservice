//setups
const path = require('path');
const grpc = require('@grpc/grpc-js');
const pino = require('pino');
const protoLoader = require('@grpc/proto-loader');

const MAIN_PROTO_PATH = path.join(__dirname, './proto/demo.proto');
const HEALTH_PROTO_PATH = path.join(__dirname, './proto/grpc/health/v1/health.proto');

const PORT = 5001;

// const shopProto = _loadProto(MAIN_PROTO_PATH).hipstershop;
const healthProto = _loadProto(HEALTH_PROTO_PATH).grpc.health.v1;

const logger = pino({
  name: 'filterservice-server',
  messageKey: 'message',
  levelKey: 'severity',
  useLevelLabels: true
});

function _loadProto(path) {
  const packageDefinition = protoLoader.loadSync(
    path,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  );
  return grpc.loadPackageDefinition(packageDefinition);
}
//getproducts as an internal function to query for the available products
function _getProducts(callback) {
  const data = require('./data/product_catalog.json');
  console.log(data.products);
  if (callback) {
    callback(data.products);
  }
}
//get all possible categories within the products
function getSupportedCategories(callback) {
  logger.info('Getting supported categories...');
  cat = []
    _getProducts((data) => {
      data.forEach(ele => ele.categories.forEach(item => cat.push(item)))
    });
  if (callback) {
  callback(cat);
  }
}
//filter the products with the given filter_code inside call
function filter(call, callback) {
  try {
    _getProducts((data) => {
      const request = call.request;
      results = []
      data.map(ele => {
        ele.categories.includes(request.filter_code) ? results.push(ele) : null
      })
      logger.info(`filter request successful`);
      console.log(results)
      if (callback) {
        callback(null, results);
      }
    });
  } catch (err) {
    logger.error(`filter request failed: ${err}`);
    callback(err.message);
  }
}

/**
 * Endpoint for health checks
 */
function check(call, callback) {
  callback(null, { status: 'SERVING' });
}
/**
 * Starts an RPC server
 */
function main () {
  logger.info(`Starting gRPC server on port ${PORT}...`);
  const server = new grpc.Server();
  // server.addService(shopProto.FilterService.service, {getSupportedCategories, filter});
  // server.addService(healthProto.Health.service, {check});

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    function() {
      logger.info(`FilterService gRPC server started on port ${PORT}`);
      server.start();
    },
   );
  // possible functions to test 
  //  _getProducts(data => console.log(data))
  //  getSupportedCategories(data => console.log(data))
  //  filter({request : {filter_code: 'kitchen'}}, data => console.log(data))
}

main();

