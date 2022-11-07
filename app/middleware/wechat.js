// app/middleware/robot.js
// options === app.config.wechat
module.exports = (options, app) => {
  return async function weChat(ctx, next) {
    console.log(options);
    console.log(app);
    console.log(ctx.request.body);
    await next();
  };
};
