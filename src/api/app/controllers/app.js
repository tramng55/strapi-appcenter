
// 'use strict';

// const { CustomFields } = require('@strapi/strapi');
// const enviroment = require('../../enviroment/controllers/enviroment');
// const system = require('../../system/controllers/system');

// /**
//  * app controller
//  */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::app.app');



'use strict';

const { CustomFields } = require('@strapi/strapi');

const system = require('../../system/controllers/system');
const { sort, filter } = require('../../../../config/middlewares');
const enviroment = require('../../enviroment/controllers/enviroment');

/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::app.app', ({strapi}) => ({
  async find(ctx) {
    try {
        const entity = await strapi.entityService.findMany("api::app.app", {
            fields: ["id", "name", "description", "slug", "bundle", "display"],
            populate: {
                enviroments: {
                    fields: ["id", "name", "code"],
                    filters: {
                      name: {
                        $eq : "DEV"
                      }
                    }
                },
                versions: {
                    fields: ["id", "versionName", "versionCode", "releaseNotes"],
                    populate: {
                        operation_systems: {
                            fields: ["id", "name", "code"],
                        }
                    }
                }
            },
            filters: {
                $and: [
                    { enviroments: { name: { $eq: "DEV" } } },
                    { systems: { name: { $eq: "Long Châu" } } }
                ]
            }
        });
        ctx.send(entity);
    } catch (error) {
        ctx.send({ error: 'An error occurred while fetching the app data' }, 500);
    }
},

    async findOne(ctx) {
        try {
          const { id } = ctx.params;
          const entity = await strapi.entityService.findOne("api::app.app", 
            id, {
            fields: ["id","name", "description", "slug", "bundle","display"],
            populate: {
                    versions: {
                        fields:["id", "versionName", "versionCode", "releaseNotes"],
                        populate: {
                            operation_systems: { 
                                fields: [ "id", "name", "code", "description"],
                            }
                        }
                    },
                    enviroments: {
                        fields: ["id", "name", "code", "description", "display"],
                    },
                    systems: {
                        fields: ["id", "name", "description", "code"],
                    },
                },
            })
            
          if (!entity) {
            return ctx.send({ error: 'App not found' }, 404);
          }
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while fetching the app' }, 500);
        }
    },


    async customCreate(ctx) {
        try {
          const { params } = ctx.Request
          const entity = await strapi.entityService.create("api::app.app", 
            {
            data: {
              name: params.name,
              description: params.description,
              slug: params.slug,
              display: params.display,
              imageUrl: params.imageUrl,
              environments: params.environments,
              systems: params.systems
            },
            });
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while creating the app' }, 500);
        }
      },

    
      async customUpdate(ctx) {
        try {
          const { id } = ctx.params;
          const { params} = ctx.Request;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::app.app", id);
          if (!existingEntity) {
            return ctx.send({ error: 'App not found' }, 404);
          }
    
          // Update the entity
          const updatedEntity = await strapi.entityService.update("api::app.app", id, {
            data: {
              name: params.name,
              description: params.description,
              slug: params.slug,
              imageUrl: params.imageUrl,
              display: params.display,
              environments: params.enviroments,
              systems: params.systems
            },
          });
    
          ctx.send(updatedEntity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while updating the app' }, 500);
        }
    },


    async customDelete(ctx) {
        try {
          const { id } = ctx.params;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::app.app", id);
          if (!existingEntity) {
            return ctx.send({ error: 'App not found' }, 404);
          }
    
          // Delete the entity
          await strapi.entityService.delete("api::app.app", id);
    
          ctx.send({ message: 'App deleted successfully' });
        } catch (error) {
          ctx.send({ error: 'An error occurred while deleting the app' }, 500);
        }
    },

    
}));





