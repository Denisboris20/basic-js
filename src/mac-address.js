function isMAC48Address(n) {
  const regExp = /([0-9A-F]+\-)+([0-9A-F])+/g;

  const result = n.match(regExp).join("");
  console.log(result, n);

  if (result === n) {
    return true;
  }
  return false;
}
module.exports = {
  isMAC48Address,
};
