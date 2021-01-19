module.exports = (path, app, req, reply) => {
  // Getting query arguments
  const { query } = req;
  const { redis } = app
  // const { key1 } = query;
  // redis.get(key1);
  app.render(req.raw, reply.raw, path, req.query, {});
};
