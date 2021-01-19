module.exports = {
  "/": require("./home").bind(null, '/'),
  "/products/:slug": require('./home').bind(null, '/')
};
