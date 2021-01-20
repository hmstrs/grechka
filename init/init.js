const redis = require('redis');
const client = redis.createClient({ host: process.env.REDIS_ADDRESS || '127.0.0.1' });

const dataHandler = require('./scrappers/scrapper1');

const sources = require('./sources');

const parsers = {
  json: null,
  html: null,
};

const parseSource = source => parsers[source.type].parse(source);

const parseSources = () => sources.map(source => parseSource(source));

const init = async () => {
  const data = await Promise.all(parseSources());
  dataHandler(client);
  return data;
};
