'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.home);
  router.get('/index', controller.home.index);
  router.get('/login', controller.login.login);
};
