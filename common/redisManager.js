const promiseRace = require('./promiseRace');

const putIntoRedis = async (redis, key, data) => {
  const value = await redis.get(key);
  let redisValue;
  try {
    redisValue = JSON.parse(value);
  } catch (e) {}
  if (!redisValue || redisValue.price !== data.price) {
    await redis.set(key, JSON.stringify(data));
  }
};

const getFromRedisRace = async (redis, key, count) => {
  const allKeys = await redis.keys("*" + key);
  if (!allKeys) return [];
  // This sort is used for taking random goods
  const promises = allKeys.sort(() => Math.random() - 0.5).map(async key => redis.get(key));
  const result = await promiseRace(promises, count);
  return result.map(res => JSON.parse(res));
}

const getFromRedisAll = async (redis, key) => {
  const allKeys = await redis.keys("*" + key);
  if (!allKeys) return [];
  const promises = allKeys.map(async key => redis.get(key));
  const result = await Promise.all(promises);
  return result.map(res => JSON.parse(res));
}

module.exports = { putIntoRedis, getFromRedisRace, getFromRedisAll };
