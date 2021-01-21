const shopIDs = [
  15611, //Метро
  67601, //МегаМаркет
  46401, //Ашан
  01070, //Новус
  41001, //Варус
  15518, //Фуршет
  50029, //СитиМаркет
  80214, //ЕкоМаркет
];

const fetchShops = async (query) => {
  const requests = shopIDs.map((id) =>
    fetch(
      `https://stores-api.zakaz.ua/stores/482${id}/products/search/?q=${query}`
    )
  );

  const data = await Promise.all(requests);
  const json = await Promise.all(data.map((d) => d.json()));

  return json.flatMap(({ results }) => results);
};

module.exports = async (path, app, req, reply) => {
  // const { query } = req;
  // const { redis } = app;

  const data = await fetchShops(
    req.url.split("/")[2] ??
      "%D0%BA%D1%80%D1%83%D0%BF%D0%B0+%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F"
  );

  reply.raw.result = data.filter((x) => x);

  app.render(req.raw, reply.raw, path, req.query, {});
};
