const fastify = require("fastify")({
  // logger: {
  //   prettyPrint: true,
  // },
  ignoreTrailingSlash: true,
  modifyCoreObjects: false,
  onProtoPoisoning: "remove",
  trustProxy: true,
});

// Add easy way of communicating with redis
fastify.register(require('fastify-redis'), { url: process.env.REDIS_ADDRESS || '127.0.0.1:6379' });

const routes = require("./routes/index");

fastify
  .register(require("fastify-nextjs"), {
    dev: process.env.NODE_ENV !== "production",
  })
  .after(() => {
    for (path in routes) {
      fastify.next(path, routes[path](fastify));
    }
  });

(async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
