function sortByHeight(arr) {
  let array = arr.filter((element) => element !== -1).sort((a, b) => a - b);
  let count = 0;

  if (array.length !== arr.length) {
    for (let i = 0; i < arr.length; i++) {
      count++;

      if (arr[i] === -1) {
        --count;
      } else {
        arr[i] = array[count - 1];
      }
    }
  } else {
    arr.sort((a, b) => a - b);
  }

  return arr;
}
module.exports = {
  sortByHeight,
};
