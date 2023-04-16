function renameFiles(names) {
  let count = 1;

  for (let i = 0; i < names.length; i++) {
    count = 1;
    for (let k = i + 1; k < names.length; k++) {
      if (names[i] === names[k]) {
        names[k] += `(${count})`;
        count++;
      }
    }
  }

  return names;
}

module.exports = {
  renameFiles,
};
