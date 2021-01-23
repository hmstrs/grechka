module.exports = (promises, count) => {
  if (count > promises.length) return [];
  return new Promise((resolve) => {
    const results = [];
    const errors = [];
    promises.forEach(promise => {
      promise
        .then(res => {
          results.push(res);
          if (count === results.length) resolve(results);
        })
        .catch(err => errors.push(err))
        .finally(() => {
          // If errors were more than successful promises were expected
          if (
            results.length < count &&
            ((promises.length - errors.length) === results.length)
          ) resolve(results);
        })
    });
  });
};
