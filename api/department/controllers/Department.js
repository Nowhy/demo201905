'use strict';

/**
 * Department.js controller
 *
 * @description: A set of functions called "actions" for managing `Department`.
 */

module.exports = {

  /**
   * Retrieve department records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
//     var fs = require('fs');
//     const csv = require('csv-parser');
//     var data = [];
// fs.createReadStream('/Users/nancy/Desktop/测试数据.csv')
//   .pipe(csv())
//   .on('data', async function (row) {
//     data.push(row);
//     console.log(row);
//     const final = await strapi.services.department.add(row);
//     console.log(final);

//   })
//   .on('end', function () {
//     console.log('Data loaded');
//   })

    // return strapi.services.department.uploadCSV(data);
    if (ctx.query._q) {
      return strapi.services.department.search(ctx.query);
    } else {
      return strapi.services.department.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a department record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.department.fetch(ctx.params);
  },

  /**
   * Count department records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.department.count(ctx.query, populate);
  },

  /**
   * Create a/an department record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.department.add(ctx.request.body);
  },

  /**
   * Update a/an department record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.department.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an department record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.department.remove(ctx.params);
  }
};
