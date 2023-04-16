function getSumOfDigits(n) {
  let res = 0;
  let str = n.toString();

  for (let i = 0; i < str.toString().length; i++) {
    res = res + Number(str.toString().slice(i, i + 1));
  }

  if (res.toString().length === 2) {
    return getSumOfDigits(res);
  } else {
    return res;
  }
}

module.exports = {
  getSumOfDigits,
};
