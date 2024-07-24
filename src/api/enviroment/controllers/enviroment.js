

'use strict';

const enviroment = require('../../enviroment/controllers/enviroment');

/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enviroment.enviroment', ({strapi}) => ({
  async customFind(ctx) {
    try {
      const params = {
        select: ["id", "guid", "name",  "description", "code", "display"],
      };
      const entity = await strapi.db.query("api::enviroment.enviroment").findMany(params);
      return entity;
    } catch (error) {
      ctx.throw(500, `Error retrieving enviroments: ${error.message}`);
    }
  },
  
  async customFindOne(ctx) {
    try {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::enviroment.enviroment").findOne({
        where: { guid: id },
        select: ["id", "guid", "name",  "description", "code", "display"],
      });

      if (!entity) {
        return ctx.send({ error: 'Enviroment not found' }, 404);
      }
      return entity;
    } catch (error) {
      ctx.throw(500, `Error retrieving environment: ${error.message}`);
    }
  },


  async customUpdate(ctx) {
    const { id } = ctx.params;
  
    if (!ctx.Request.body || !ctx.Request.body.data) {
      return ctx.send({ error: 'No data provided' }, 400);
    }
    const { data } = ctx.Request.body;

    try {
      const entity = await strapi.db.query("api::enviroment.enviroment").findOne({
        where: { guid: id }
      });
  
      if (!entity) {
        return ctx.send({ error: 'Enviroment not found' }, 404);
      }
  
      const updatedEntity = await strapi.db.query("api::enviroment.enviroment").update({
        where: { guid: id },
        select: ["id", "guid", "name",  "description", "code", "display"],
        data: data
      });
  
      return ctx.send(updatedEntity);
    } catch (err) {
      ctx.send({ error: 'An error occurred', details: err.message }, 500);
    }
  },
  

  async customDelete(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db.query("api::enviroment.enviroment").findOne({
        where: { guid: id }
      });
  
      if (!entity) {
        return ctx.send({ error: 'Enviroment not found' }, 404);
      }
      await strapi.db.query("api::enviroment.enviroment").delete({
        where: { guid: id }
      });
      ctx.send({ message: 'Enviroment deleted successfully' });
    } catch (err) {
      ctx.send({ error: 'An error occurred', details: err.message }, 500);
    }
  }
}));





