//setups
const functionality = require('./functionality.js')
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
const _getProducts = (callback) => functionality._getProducts(callback => callback);
const getSupportedCategories = (callback) => functionality.getSupportedCategories(callback => callback);
const filter = (call, callback) => functionality.filter(call, callback => callback);

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

   filter({request : {filter_code: 'kitchen'}}, data => console.log(data))
}

main();

