const fetchShops = require('../common/fetcher');
const { putIntoRedis, getFromRedisAll } = require('../common/redisManager');

const DEFAULT_GOOD = '%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F';
const GOOD_AMOUNT = 4;

module.exports = fastify => path => async (app, req, reply) => {
  const { redis } = fastify
  const good = req.url.split("/")[2] ?? DEFAULT_GOOD;
  // Get data from shops
  let data = await fetchShops(good);
  // Get from redis if fetch failed
  if (data.length < GOOD_AMOUNT) {
    data = await getFromRedisAll(redis, good);
  }
  // Generate data for ssr
  const renderData = data.filter((x) => x).slice(0, 4);
  reply.raw.result = renderData;
  // Render
  app.render(req.raw, reply.raw, path, req.query, {});
  // Additionally save it to redis
  await Promise.all(renderData.map(data => putIntoRedis(redis, data.ean + good, data)));
};
