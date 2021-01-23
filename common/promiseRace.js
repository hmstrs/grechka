module.exports = (promises, count) => {
  return new Promise((resolve) => {
    let counter = 0;
    let results = [];
    promises.forEach(promise => {
      promise
      .then(res => {
        if (count > counter) {
          counter++;
          results.push(res);
        }
        if (count === counter) {
          resolve(results);
        }
      })
      .catch();
    });
  });
};
