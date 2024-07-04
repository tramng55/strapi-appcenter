'use strict';

/**
 * operating-system controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::operating-system.operating-system', ({strapi}) => ({
    
    async find(ctx) {
        try {
            const params = await strapi.entityService.findMany("api::operating-system.operating-system", {
                fields:["id", "name", "code", "description", "fileExtension", "fileContentType", "display"],
           });
           ctx.send(params);
        } catch (error) {
            ctx.send({ error: 'An error occurred while updating the operating-system'}, 500);
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
          const findOne = await strapi.service("api::operating-system.operating-system").findOne({ id });
    
          if (!findOne) {
            return ctx.notFound('Operating-system not found.');
          }
    
          const updated = await strapi.service("api::operating-system.operating-system").update({ id }, {
            query: query || findOne.query
          });
    
          
          ctx.send(updated);
        } catch (err) {
          ctx.send({ error: 'An error occurred while updating the operating-system' }, 500);
        }
      },

    async customCreate(ctx) {
        try {
          const { query } = ctx.Request.body;
          if (!query) {
            return ctx.badRequest();
          }
          const create = await strapi.service("api::operating-system.operating-system").create({ query });
    
          ctx.send(create);
        } catch (err) {
          ctx.send({ error: 'An error occurred while creating the operating-system' }, 500);
        }
    },

    async customDelete(ctx) {
        try {
          const { id } = ctx.params; 
          await strapi.service("api::operating-system.operating-system").delete({ id });
          ctx.send({ message: 'Operating-system deleted successfully.' });
        } catch (err) {
          ctx.send({ error: 'An error occurred while deleting the operating-system' }, 500);
        }
      },
}));




