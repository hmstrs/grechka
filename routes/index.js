module.exports = {
  "/": fastify => require("./home")(fastify)("/"),
  "/products/*": fastify => require("./home")(fastify)("/products/:name"),
  "/grechka/": fastify => require('./grechka')(fastify)('/grechka'),
};
