function getDNSStats(domains) {
  let array = [];
  let obj = {};
  domains.forEach((item) => {
    array.push([...item.split(".")].reverse());
  });

  array.forEach((domain) => {
    domain.forEach((level, index, array) => {
      let key = "." + array.slice(0, index + 1).join(".");
      if (obj[key]) {
        obj[key] = obj[key] + 1;
      } else {
        obj[key] = 1;
      }
    });
  });

  return obj;
}

module.exports = {
  getDNSStats,
};
