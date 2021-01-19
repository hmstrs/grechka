const redis = require('redis');
const client = redis.createClient({ host: process.env.REDIS_ADDRESS || '127.0.0.1' });

const srapper1 = require('./scrappers/scrapper1');
const init = async () => {
  await srapper1(client);
};
