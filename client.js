const path = require('path');
const grpc = require('grpc');
const pino = require('pino');

const PROTO_PATH = path.join(__dirname, './proto/demo.proto');
const PORT = 5001;

const shopProto = grpc.load(PROTO_PATH).hipstershop;
const client = new shopProtoFilterService(`localhost:${PORT}`,
  grpc.credentials.createInsecure());

const logger = pino({
  name: 'filterservice-client',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
});

//interface for the functions in server.js
const request = {
    filter_code: 'kitchen',
};
client.getSupportedCategories({}, (err, response) => {
  if (err) {
    logger.error(`Error in getSupportedCategories: ${err}`);
  } else {
    logger.info(`filter codes: ${response}`);
  }
});

client.filter(request, (err, response) => {
  if (err) {
    logger.error(`Error in filter: ${err}`);
  } else {
    logger.log(`Filter: ${request} res ${_filterCatalog(response)}`);
  }
});
