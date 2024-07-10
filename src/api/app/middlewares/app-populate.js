'use strict';

const app = require("../controllers/app");

/**
 * `app-populate` middleware
 */
const populate = {

  

};
  

  
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In app-populate middleware.');
    ctx.query = {populate}
    

    await next();
  };
};




