
'use strict';

const enviroment = require('../../enviroment/controllers/enviroment');


/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::app.app', ({strapi}) => ({
    // async find(ctx) {
    //     const { environmentName, systemId } = ctx.query;
    //     try {
    //         const entity = await strapi.entityService.findPage("api::app.app",
    //             {
    //             fields: ["id", "name", "description", "slug", "bundle", "display"],
    //             populate: {
    //                 enviroments: {
    //                     fields: ["id", "name", "code"],
                        
    //                 },
    //                 versions: {
    //                     fields: ["id", "versionName", "versionCode", "releaseNotes"],
    //                     populate: {
    //                         operation_systems: {
    //                             fields: ["id", "name", "code"],
    //                         }
    //                     }
    //                 },
    //                 systems: {
    //                     fields: ["id", "name", "code"],
    //                 }
    //             },
                
    //         });
    //         ctx.send(entity);
    //     } catch (error) {
    //         ctx.send({ error: 'An error occurred while fetching the app data' }, 500);
    //     }

    // },

    async find(ctx) {
        const { env, systemId } = ctx.query;
        try {
          const filters = {};
          if (env) {
            filters.enviroments = { name: env};
          }
          if (systemId) {
            filters.systems = { id: systemId };
          }
          const entity = await strapi.entityService.findMany("api::app.app", {
            fields: ["id", "name", "description", "slug", "bundle"],
            populate: {
              enviroments: {
                fields: ["id", "name", "code"],
                filters: filters.enviroments,
              },
              versions: {
                fields: ["id", "versionName", "versionCode"],
                populate: {
                  operation_systems: {
                    fields: ["id", "name", "code"]
                  }
                }
              },
            },
            filters
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
            fields: ["id", "name", "description", "slug", "bundle","display"],
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





