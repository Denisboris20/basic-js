function getEmailDomain(email) {
  const regExp = /([\w-]+\.)+\w+$/g;

  return email.match(regExp).join("");
}
module.exports = {
  getEmailDomain,
};
