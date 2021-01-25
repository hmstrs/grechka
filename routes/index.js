module.exports = {
  "/": require("./home"),
  "/products/*": require("./products"),
  "/grechka": require("./grechka"),
};
