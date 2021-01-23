module.exports = async (redis, key, data) => {
  const value = await redis.get(key);
  let redisValue = {};
  try {
    redisValue = JSON.parse(value);
  } catch (e) {}
  if (redisValue.price !== data.price) {
    await redis.set(key, JSON.stringify(data));
  }
};
