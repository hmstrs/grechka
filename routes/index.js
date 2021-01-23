module.exports = {
  "/": require("./home").bind(null, "/"),
  "/preview": require("./preview").bind(null, "/preview"),
  "/products/*": require("./home").bind(null, "/products/:name"),
  "/grechka": require('./grechka').bind(null, '/grechka'),
};
