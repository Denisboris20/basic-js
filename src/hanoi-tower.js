function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor((3600 / turnsSpeed) * turns);
  const hanoiProperties = {
    turns,
    seconds,
  };
  return hanoiProperties;
}
module.exports = {
  calculateHanoi,
};
