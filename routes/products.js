const fetchShops = require("../common/fetcher");

module.exports = () => async (app, req, reply) => {
  const good = req.url.split("/")[2];

  // Get data from shops
  const data = await fetchShops(good);

  // Generate data for ssr
  reply.raw.result = data.filter((x) => x);

  // Render
  app.render(req.raw, reply.raw, "/products/:name", req.query, {});
};
