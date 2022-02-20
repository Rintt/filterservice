const pino = require('pino');
const protoLoader = require('@grpc/proto-loader');
const logger = pino({
  name: 'filterservice-server',
  messageKey: 'message',
  levelKey: 'severity',
  useLevelLabels: true
});
//getProducts as an internal function to query for the available products
function _getProducts(callback) {
    const data = require('./data/product_catalog.json');
    if (callback) {
      return callback(data.products);
    }
  }
  exports._getProducts = _getProducts;
  
  //get all possible categories within the products
  function getSupportedCategories(callback) {
    logger.info('Getting supported categories...');
    cat = []
      _getProducts((data) => {
        data.forEach(ele => ele.categories.forEach(item => {
            if (!cat.includes(item)) {
            cat.push(item)
        }}))});
    if (callback) {
        return callback(cat);
    }
    return cat
  }
  exports.getSupportedCategories = getSupportedCategories;
  
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
        if (callback) {
          console.log(results)
          return callback(call, results);
        }
      });
    } catch (err) {
      logger.error(`filter request failed: ${err}`);
      return callback(err.message);
    }
  }
  exports.filter = filter;