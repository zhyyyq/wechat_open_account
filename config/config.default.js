/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667820782743_7182';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.middleware = [ 'wechat' ];
  config.wechat = {
    token: 'zhouyongqi',
    appid: 'wxe523af490c2c6420',
    EncodingAESKey: 'ocFf6tlS7Zs56og5jBjZ6uHleM7eobv4YpDiDH0mcrY',
  };
  return {
    ...config,
    ...userConfig,
  };
};
