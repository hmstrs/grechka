const redis = require('redis');
const client = redis.createClient({ host: process.env.REDIS_ADDRESS || '127.0.0.1' });
const fetchShops = require('../common/fetcher');

const init = async () => {
  const data = await fetchShops(
    req.url.split("/")[2] ??
    "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F"
  );
  const filtredData = data.filter((x) => x);

};
