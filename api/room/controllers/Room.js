'use strict';

/**
 * room.js controller
 *
 * @description: A set of functions called "actions" for managing `room`.
 */

module.exports = {

  /**
   * Retrieve room records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.room.search(ctx.query);
    } else {
      return strapi.services.room.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a room record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.room.fetch(ctx.params);
  },

  /**
   * Count room records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.room.count(ctx.query, populate);
  },

  /**
   * Create a/an room record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const res = await strapi.services.room.add(ctx.request.body);
    if(res.statusCode && res.statusCode!=200){
      return ctx.response.badRequest([res.message], [ctx.request.body]);
    }else{
      return res;
    }
  },

  /**
   * Update a/an room record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.room.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an room record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.room.remove(ctx.params);
  }
};
