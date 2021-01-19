module.exports = (app, req, reply) => {
  reply.raw.test = "123";
  app.render(req.raw, reply.raw, "/", req.query, {});
};
