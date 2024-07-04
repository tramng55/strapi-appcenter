
'use strict';

const { filter } = require('../../../../config/middlewares');
const enviroment = require('../../enviroment/controllers/enviroment');

/** system
 * app controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::system.system', ({strapi}) => ({
    async find(ctx) {
        try {
            const params = await strapi.entityService.findPage("api::system.system", 
            {
                fields:["id", "name", "code", "description"],
            })
            
           ctx.send(params);
        } catch (error) {
            ctx.send({ error: 'An error occurred while updating the system'}, 500);
        }
    },

    
    async findOne(ctx) {
        try {
          const { id } = ctx.params;
          const entity = await strapi.entityService.findOne("api::system.system", id, {
            fields: ["id","name", "code", "description"],
          });
          if (!entity) {
            return ctx.send({ error: 'System not found' }, 404);
          }
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while fetching the system' }, 500);
        }
    },


    async customCreate(ctx) {
        try {
          const { params } = ctx.Request
          const entity = await strapi.entityService.create("api::system.system", {
            data: {
              name: params.name,
              description: params.description,
              code: params.code,
            },
          });
          ctx.send(entity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while creating the system' }, 500);
        }
      },

    
      async customUpdate(ctx) {
        try {
          const { id } = ctx.params;
          const { params} = ctx.Request;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::system.system", id);
          if (!existingEntity) {
            return ctx.send({ error: 'System not found' }, 404);
          }
    
          // Update the entity
          const updatedEntity = await strapi.entityService.update("api::system.system", id, {
            data: {
              name: params.name,
              description: params.description,
              code: params.code,
            },
          });
    
          ctx.send(updatedEntity);
        } catch (error) {
          ctx.send({ error: 'An error occurred while updating the system' }, 500);
        }
    },


    async customDelete(ctx) {
        try {
          const { id } = ctx.params;
    
          // Fetch the existing entity
          const existingEntity = await strapi.entityService.findOne("api::system.system", id);
          if (!existingEntity) {
            return ctx.send({ error: 'System not found' }, 404);
          }
    
          // Delete the entity
          await strapi.entityService.delete("api::system.system", id);
    
          ctx.send({ message: 'System deleted successfully' });
        } catch (error) {
          ctx.send({ error: 'An error occurred while deleting the system' }, 500);
        }
    },

    
}));





