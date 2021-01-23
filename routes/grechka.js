const fetchShops = require('../common/fetcher');
const redisManager = require('../common/redisManager');

module.exports = fastify => path => async (app, req, reply) => {
  const { redis } = fastify;
  console.log(redis);
  const data = await fetchShops(
    req.url.split("/")[2] ??
    "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F"
  );
  const saveData = data.filter((x) => x);
  reply.raw.result = saveData.map(x => ({ price: x.price, time: Date.now() }));

  app.render(req.raw, reply.raw, path, req.query, {});
  await Promise.all(saveData.map(data => redisManager(redis, data.ean, data)));
};
