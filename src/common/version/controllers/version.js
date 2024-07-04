'use strict';

/**
 * version controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::version.version', ({strapi}) => ({
    
    async find(ctx) {
        try {
            const params = await strapi.entityService.findMany("api::version.version", {
                fields:["id", "appId", "versionName", "versionCode", "pathFile","releaseNotes", 
                "branch", "isForce", "isLatest", "isShowHeader", "isShowPopup", "publishDate"],
           });
           ctx.send(params);
        } catch (error) {
            ctx.send({ error: 'An error occurred while updating the version'}, 500);
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
          const findOne = await strapi.service("api::version.version").findOne({ id });
    
          if (!findOne) {
            return ctx.notFound('version not found.');
          }
    
          const updated = await strapi.service("api::version.version").update({ id }, {
            query: query || findOne.query
          });
    
          
          ctx.send(updated);
        } catch (err) {
          ctx.send({ error: 'An error occurred while updating the version' }, 500);
        }
      },

    async customCreate(ctx) {
        try {
          const { query } = ctx.Request.body;
          if (!query) {
            return ctx.badRequest();
          }
          const create = await strapi.service("api::version.version").create({ query });
    
          ctx.send(create);
        } catch (err) {
          ctx.send({ error: 'An error occurred while creating the version' }, 500);
        }
    },

    async customDelete(ctx) {
        try {
          const { id } = ctx.params; 
          await strapi.service("api::version.version").delete({ id });
          ctx.send({ message: 'Version deleted successfully.' });
        } catch (err) {
          ctx.send({ error: 'An error occurred while deleting the version' }, 500);
        }
      },
}));




