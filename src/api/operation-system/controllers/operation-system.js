
'use strict';

const enviroment = require('../../enviroment/controllers/enviroment');

/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::operation-system.operation-system', ({strapi}) => ({
  async customFind(ctx) {
    try {
      const params = {
        select: ["id", "guid", "name", "code", "description"],
      };
      const entity = await strapi.db.query("api::operation-system.operation-system").findMany(params);
      return entity;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async customFindOne(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db.query("api::operation-system.operation-system").findOne({
        where: { guid: id },
        select: ["id", "guid", "name", "code", "description"],
      });

      if (!entity) {
        ctx.throw(404, 'Operation-system not found');
      }

      return entity;
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },  

  async customUpdate(ctx) {
    const { id } = ctx.params;
    if (!ctx.Request.body || !ctx.Request.body.data) {
      return ctx.send({ error: 'No data provided' }, 400);
    }
    const { data } = ctx.Request.body;
    
    try {
      const entity = await strapi.db.query("api::operation-system.operation-system").findOne({
        where: { guid: id }
      });
      if (!entity) {
        return ctx.send({ error: 'Operation-system not found' }, 404);
      }
      const updatedEntity = await strapi.db.query("api::operation-system.operation-system").update({
        where: { guid: id },
        select: ["id", "guid", "name", "code", "description"],
        data: data
      });
  
      ctx.send(updatedEntity);
    } catch (err) {
      ctx.send({ error: 'An error occurred', details: err.message }, 500);
    }
  }, 

  async customDelete(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db.query("api::operation-system.operation-system").findOne({
        where: { guid: id }
      });

      if (!entity) {
        ctx.throw(404, 'Operation-system not found');
      }
      await strapi.db.query("api::operation-system.operation-system").delete({
        where: { guid: id }
      });
      ctx.send({ message: 'Operation-system deleted successfully' });
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }
}))
  
  
    

    





