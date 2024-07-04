
'use strict';

const enviroment = require('../../enviroment/controllers/enviroment');

/**
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::operation-system.operation-system', ({strapi}) => ({
    async find(ctx) {
        try 
        {
          const params = await strapi.entityService.findPage("api::operation-system.operation-system", 
            {
              fields:["id", "name", "code","description"], 
              
            })
          ctx.send(params);
        } 
        catch (error) 
        {
          ctx.send({ error: 'An error occurred while updating the operation-system'}, 500);
        }
    },

    async findOne(ctx) {
        try {
          const { id } = ctx.params;
          const entity = await strapi.entityService.findOne("api::operation-system.operation-system", id, {
            fields: ["id","name", "code", "description"],
          });
          if (!entity) {
            return ctx.send({ error: 'Operation-system not found' }, 404);
          }
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while fetching the operation-system' }, 500);
        }
    },


    async customCreate(ctx) {
        try {
          const { params } = ctx.Request
          const entity = await strapi.entityService.create("api::operation-system.operation-system", {
            data: {
              name: params.name,
              description: params.description,
              code: params.code,
              fileContentType: params.fileContentType,
              fileExtention: params.fileExtention
             
            },
          });
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while creating the operation-system' }, 500);
        }
      },

    
      async customUpdate(ctx) {
        try {
          const { id } = ctx.params;
          const { params} = ctx.Request;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::operation-system.operation-system", id);
          if (!existingEntity) {
            return ctx.send({ error: 'Operation-system not found' }, 404);
          }
    
          // Update the entity
          const updatedEntity = await strapi.entityService.update("api::operation-system.operation-system", id, 
          {
            data: 
            {
              name: params.name,
              description: params.description,
              code: params.code,
              fileContentType: params.fileContentType,
              fileExtention: params.fileExtention
            },
          });
          ctx.send(updatedEntity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while updating the operation-system' }, 500);
        }
    },


    async customDelete(ctx) {
        try {
          const { id } = ctx.params;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::operation-system.operation-system", id);
          if (!existingEntity) {
            return ctx.send({ error: 'Operation-system not found' }, 404);
          }
    
          // Delete the entity
          await strapi.entityService.delete("api::operation-system.operation-system", id);
    
          ctx.send({ message: 'Operation-system deleted successfully' });
        } catch (error) {
          ctx.send({ error: 'An error occurred while deleting the operation-system' }, 500);
        }
    },

    
}));





