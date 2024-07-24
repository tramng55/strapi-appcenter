'use strict';


/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::app.app', ({strapi}) => ({
  async customFind(ctx) {
    try {
      const { env, systemId } = ctx.query;
      const filters = {};
      
      if (env) {
        filters.enviroments = { name: env };  
      }
      if (systemId) {
        filters.systems = { guid: systemId };  
      } 
  
      const entity = await strapi.db.query("api::app.app").findMany({
        select: ["id", "guid", "name", "description", "slug", "bundle", "display"],
        populate: {
          environments: {
            select: ["id", "guid", "name", "code"],
            filters: filters.enviroments
          },
          versions: {
            select: ["id", "guid", "versionName", "versionCode"],
            populate: {
              operation_systems: {
                select: ["id", "guid", "name", "code"],
              }
            },
          }
        },
        where: filters
      });
  
      ctx.send(entity);
    } catch (error) {
      strapi.log.error('Error fetching apps:', error);
      ctx.send({ error: 'Internal server error' }, 500);
    }
  },

  async customFindOne(ctx) {
    try {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query("api::app.app").findOne({
        where: { guid: id },
        select: ["id", "guid", "name", "description", "slug", "display"],
        populate: {
          enviroments: {
            select: ["id", "guid", "name", "code"],
          },
          systems: {
            select: ["id", "guid", "name", "code"],
          },
          versions: {
            select: ["id", "guid", "versionName", "versionCode", "releaseNotes"],
            populate: {
              operation_systems: {
                select: ["id", "guid", "name", "code"],
              }
            }
          }
        }
      });
      if (!entity) {
        return ctx.send({ error: 'App not found' }, 404);
      }
      ctx.send(entity);
    } catch (error) {
      strapi.log.error('Error fetching app:', error);
      ctx.send({ error: 'Internal server error' }, 500);
    }
  },
  

  async customDelete(ctx) {
    try {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::app.app").findOne({
        where: { guid: id },
      });
      if (!entity) {
        return ctx.send({ error: 'App not found' }, 404);
      }
      await strapi.db.query("api::app.app").delete({
        where: { guid: id }
      });
  
      ctx.send({ message: 'App deleted successfully' });
    } catch (error) {
      strapi.log.error('Error deleting app:', error);
      ctx.send({ error: 'Internal server error' }, 500);
    }
  },

    
  async customUpdate(ctx) {
    const { id } = ctx.params;
      if (!ctx.Request.body || !ctx.Request.body.data) {
        return ctx.send({ error: 'No data provided' }, 400);
      }
      const { data } = ctx.Request.body;

    try {
      const entity = await strapi.db.query("api::app.app").findOne({
        where: { guid: id }
      });
      if (!entity) {
        return ctx.send({ error: 'App not found' }, 404);
      }
    const updatedEntity = await strapi.db.query("api::app.app").update({
      where: { guid: id },
      select: ["id", "guid", "name", "description", "slug", "display"],
        populate: {
          enviroments: {
            select:["id", "guid", "name", "code"],
          },
          systems: {
            select:["id","guid",  "name", "code"],
          },
          versions: {
            select: ["id","guid",  "versionName", "versionCode", "releaseNotes"],
            populate: {
              operation_systems: {
                select: ["id", "guid", "name", "code"],
              }
            }
          }
        },
      data: data
    });
    ctx.send(updatedEntity);
    } catch (err) {
      ctx.send({ error: 'An error occurred', details: err.message }, 500);
    }
  }
}));





