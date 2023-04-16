function minesweeper(matrix) {
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const resRow = [];

    for (let j = 0; j < row.length; j++) {
      let count = 0;

      for (
        let x = Math.max(i - 1, 0);
        x <= Math.min(i + 1, matrix.length - 1);
        x++
      ) {
        for (
          let y = Math.max(j - 1, 0);
          y <= Math.min(j + 1, row.length - 1);
          y++
        ) {
          if ((x !== i || y !== j) && matrix[x][y]) {
            count++;
          }
        }
      }

      resRow.push(count);
    }

    res.push(resRow);
  }

  return res;
}

module.exports = {
  minesweeper,
};
