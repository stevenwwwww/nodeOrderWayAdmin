/*
 * @Author: zhangda
 * @Date: 2024-05-24 11:23:33
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 18:16:20
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \speed\src\setupProxy.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5008",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
      logLevel: "debug"
    }),
  );
};
