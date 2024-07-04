
'use strict';


/**
 * version controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::version.version', ({strapi}) => ({
    async find(ctx) {
        try {
            
            const entity = await strapi.entityService.findPage("api::version.version", 
            {
                fields:["id", "versionName", "versionCode", "releaseNotes" ], 
                populate: 
                {
                    operation_systems: 
                    {
                       fields: ["id", "name", "description", "code"],
                    },
                    apps: 
                    { 
                       fields: ["id"]
                    },
                },
            })
           ctx.send(entity);
        } catch (error) {
           ctx.send({ error: 'An error occurred while updating the version'}, 500);
        }

    },

    
    async findOne(ctx) {
        try {
          const { id } = ctx.params;
          const entity = await strapi.entityService.findOne("api::version.version", 
            id, {
            fields: ["id", "versionName", "versionCode", "releaseNotes", ], 
            populate: 
                {
                    operation_systems: 
                    {
                       fields: ["id", "name", "description", "code"]
                    },
                    apps: 
                    { 
                       fields: ["id"]
                    },
                }
            });
          if (!entity) {
            return ctx.send({ error: 'Version not found' }, 404);
          }
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while fetching the version' }, 500);
        }
    },


    async customCreate(ctx) {
        try {
          const { params } = ctx.Request
          const entity = await strapi.entityService.create("api::version.version", 
            {
            data: {
              versionName: params.versionName,
              versionCode: params.versionCode,
              releaseNotes: params.releaseNotes,
              pathFile: params.pathFile,
              branch: params.branch,
              isForce: params.isForce,
              isLates: params.isLates,
              isShowHeader: params.isShowHeader,
              isShowPopup: params.isShowPopup,
              
            },
            });
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while creating the version' }, 500);
        }
      },

    
      async customUpdate(ctx) {
        try {
          const { id } = ctx.params;
          const { params} = ctx.Request;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::version.version", id);
          if (!existingEntity) {
            return ctx.send({ error: 'Version not found' }, 404);
          }
    
          // Update the entity
          const updatedEntity = await strapi.entityService.update("api::version.version", id, {
            data: {
                versionName: params.versionName,
                versionCode: params.versionCode,
                releaseNotes: params.releaseNotes,
                pathFile: params.pathFile,
                branch: params.branch,
                isForce: params.isForce,
                isLates: params.isLates,
                isShowHeader: params.isShowHeader,
                isShowPopup: params.isShowPopup
            },
          });
    
          ctx.send(updatedEntity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while updating the version' }, 500);
        }
    },


    async customDelete(ctx) {
        try {
          const { id } = ctx.params;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::version.version", id);
          if (!existingEntity) {
            return ctx.send({ error: 'Version not found' }, 404);
          }
    
          // Delete the entity
          await strapi.entityService.delete("api::version.version", id);
    
          ctx.send({ message: 'Version deleted successfully' });
        } catch (error) {
          ctx.send({ error: 'An error occurred while deleting the version' }, 500);
        }
    },

    
}));





