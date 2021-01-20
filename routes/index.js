module.exports = {
  "/": require("./home").bind(null, "/"),
  "/products/*": require("./home").bind(null, "/products/:name"),
};
