'use strict';

/**
 * X-Total-Count hook
 */

const _ = require('lodash');

module.exports = () => {
  return {
    initialize: function(cb) {
      strapi.app.use(async (ctx, next) => {
        await next();
      try {
        if (ctx.status == 200 && !_.isUndefined(ctx.state.route.handler[1]) && ctx.state.route.handler[1].name == "find") {
          let api = ctx.state.route.path.split("/")[1];
          if(api.slice(-1)=="s"){
            api = api.slice(0, -1)
          }

          if (!_.isUndefined(strapi.services[api]) && !_.isUndefined(strapi.services[api].count)) {
            ctx.set('X-Total-Count', await strapi.services[api].count(ctx.query));
          }

        }
      } catch (error) {

      }

      });
      cb();
    }
  };
};
