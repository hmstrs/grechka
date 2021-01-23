const fetchShops = require('../common/fetcher');
const redisManager = require('../common/redisManager');

module.exports = fastify => path => async (app, req, reply) => {
  const { redis } = fastify;
  const data = await fetchShops(
    req.url.split("/")[2] ??
      "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F"
  );
  const renderData = data.filter((x) => x).slice(0, 4);
  console.log(renderData[0]);
  reply.raw.result = renderData;
  app.render(req.raw, reply.raw, path, req.query, {});
  await Promise.all(renderData.map(data => redisManager(redis, data.ean, data)));
};
