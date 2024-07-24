
'use strict';

const operationSystem = require('../../operation-system/routes/operation-system');


/**
 * version controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::version.version', ({strapi}) => ({
  async customFind(ctx) {
    try {
      const entity = await strapi.db.query("api::version.version").findMany({
        select: ["id", "guid", "versionName", "versionCode", "releaseNotes"],
        populate: {
          operation_systems: {
            select: ["id", "guid", "name", "description", "code"],
          },
          apps: {
            select: ["id", "guid"],
          },
        },
      });
      return entity;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  

  async customFindOne(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db.query("api::version.version").findOne({
        where: { guid: id },
        select: ["id", "guid", "versionName", "versionCode", "releaseNotes"],
        populate: {
          operation_systems: {
            select: ["id", "guid", "name", "description", "code"],
          },
          apps: {
            select: ["id", "guid", "name", "description", "slug", "display"],
          },
        },
      });
  
     
      if (!entity) {
        return ctx.send({ error: 'Version not found' }, 404);
      }
      return entity;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  
  async customUpdate(ctx) {
    const { id } = ctx.params;

    if (!ctx.Request.body || !ctx.Request.body.data) {
      return ctx.send({ error: 'No data provided' }, 400);
    }
    const { data } = ctx.Request.body;
    try {
      const entity = await strapi.db.query("api::version.version").findOne({
        where: { guid: id }
      });
      if (!entity) {
        return ctx.send({ error: 'Version not found' }, 404);
      }
      const updatedEntity = await strapi.db.query("api::version.version").update({
        where: { guid: id },
        select: ["id", "guid", "versionName", "versionCode", "releaseNotes" ],
        populate: {
          operation_systems: {
            select: ["id", "guid", "name", "description", "code"],
          },
          apps: {
            select: ["id", "guid", "name", "description", "slug", "display"],
          }
        },
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
      const entity = await strapi.db.query("api::version.version").findOne({
        where: { guid: id }
      });
      if (!entity) {
        return ctx.send({ error: 'Version not found' }, 404);
      }
      await strapi.db.query("api::version.version").delete({
        where: { guid: id }
      });
      ctx.send({ message: 'Version deleted successfully' });
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));





