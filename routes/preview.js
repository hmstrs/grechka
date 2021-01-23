const fetchShops = require('../common/fetcher');

module.exports = async (path, app, req, reply) => {
  // const { redis } = app;
  const data = await fetchShops(
    req.url.split("/")[2] ??
    "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F"
  );
  reply.raw.result = data.filter((x) => x).slice(0, 4);

  app.render(req.raw, reply.raw, path, req.query, {});
  // logic of compare and saving into redis there
};
