const fetch = require('node-fetch');
const promiseRace = require('./promiseRace');

const shopIDs = [
  '15611', //Метро
  '67601', //МегаМаркет
  '46401', //Ашан
  '01070', //Новус
  '41001', //Варус
  '15518', //Фуршет
  '50029', //СитиМаркет
  '80214', //ЕкоМаркет
];

module.exports = async (query) => {
  const requests = shopIDs.map((id) =>
    fetch(
      `https://stores-api.zakaz.ua/stores/482${id}/products/search/?q=${query}`
    )
  );
  // only 4 first then not necessary
  const data = await promiseRace(requests, 4);
  const json = await Promise.all(data.map((d) => d.json()));

  return json.flatMap(({ results }) => results);
};
