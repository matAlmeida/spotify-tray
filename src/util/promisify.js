module.exports = functionWithCallback => {
  return (...props) =>
    new Promise((resolve, reject) => {
      functionWithCallback(...props, (err, ...response) => {
        if (err) reject(err);
        resolve(...response);
      });
    });
};
