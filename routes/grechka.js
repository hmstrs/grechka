const fetchShops = require("../common/fetcher");
const { putIntoRedis, getFromRedisRace } = require("../common/redisManager");

const GRECHKA =
  "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F";

module.exports = ({ redis }) => async (app, req, reply) => {
  // Get data from shops
  const data = await fetchShops(GRECHKA);

  // Get from redis if fetch failed
  if (!data.length) {
    data = await getFromRedisRace(redis, GRECHKA);
  }

  // Generate data for ssr
  const filteredData = data.filter((x) => x);

  reply.raw.result = {
    data: filteredData,
    statistics: filteredData.map((x) => ({ price: x.price, time: Date.now() })),
  };

  app.render(req.raw, reply.raw, path, req.query, {});
  await Promise.all(
    filteredData.map((data) => putIntoRedis(redis, data.ean + good, data))
  );
};
