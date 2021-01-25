const fetchShops = require('../common/fetcher');
const { putIntoRedis, getFromRedisRace } = require('../common/redisManager');

const DEFAULT_GOOD = '%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F';

module.exports = fastify => path => async (app, req, reply) => {
  const { redis } = fastify
  const good = req.url.split("/")[2] ?? DEFAULT_GOOD;
  // Get data from shops
  let data = await fetchShops(good);
  // Get from redis if fetch failed
  if (!data.length) {
    data = await getFromRedisRace(redis, good, GOOD_AMOUNT);
  }
  // Generate data for ssr
  const filteredData = data.filter((x) => !!x);
  // Getting statistics from db by good name
  let statistics = [];
  if (good === DEFAULT_GOOD) {
    statistics = await redis.get("statistics" + good);
    try {
      statistics = JSON.parse(statistics);
      // if (typeof statistics === 'string') statistics = JSON.parse(statistics);
    } catch (e) {
      /* ignore error */
    }
    if (!statistics) statistics = [];
  }

  reply.raw.result = {
    data: filteredData,
    statistics,
  };

  app.render(req.raw, reply.raw, path, req.query, {});

  await Promise.all(filteredData.map(data => putIntoRedis(redis, data.ean + good, data)));
  if (good === DEFAULT_GOOD) {
    const averagePrice = filteredData.map(x => x.price).reduce((prev, cur) => prev + cur);
    const time = Date.now();
    statistics.push({ averagePrice, time });
    await redis.set("statistics" + good, JSON.stringify(statistics));
  }
};
