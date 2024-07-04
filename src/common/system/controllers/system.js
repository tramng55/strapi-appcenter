'use strict';

/**
 * system controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::system.system', ({strapi}) => ({
    
    async find(ctx) {
        try {
            const params = await strapi.entityService.findMany("api::system.system", {
                fields:["id", "description", "code"],
           });
           ctx.send(params);
        } catch (error) {
            ctx.send({ error: 'An error occurred while updating the system'}, 500);
        }
    },


    async customUpdate(ctx) {
        try {
          const { id } = ctx.params;
          const {query} = ctx.Request.body; 

          if (!id) {
            return ctx.badRequest();
          }
          if (!query) {
            return ctx.badRequest();
          }

          //customFindOne
          const findOne = await strapi.service("api::system.system").findOne({ id });
    
          if (!findOne) {
            return ctx.notFound('system not found.');
          }
    
          const updated = await strapi.service("api::system.system").update({ id }, {
            query: query || findOne.query
          });
    
          
          ctx.send(updated);
        } catch (err) {
          ctx.send({ error: 'An error occurred while updating the system' }, 500);
        }
      },

    async customCreate(ctx) {
        try {
          const { query } = ctx.Request.body;
          if (!query) {
            return ctx.badRequest();
          }
          const create = await strapi.service("api::system.system").create({ query });
    
          ctx.send(create);
        } catch (err) {
          ctx.send({ error: 'An error occurred while creating the system' }, 500);
        }
    },

    async customDelete(ctx) {
        try {
          const { id } = ctx.params; 
          await strapi.service("api::system.system").delete({ id });
          ctx.send({ message: 'System deleted successfully.' });
        } catch (err) {
          ctx.send({ error: 'An error occurred while deleting the system' }, 500);
        }
      },
}));




