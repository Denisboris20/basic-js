function countCats(arr) {
  let cats = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrayInArray = arr[i];
    for (let j = 0; j < arrayInArray.length; j++) {
      if (arrayInArray[j] === "^^") {
        cats += 1;
      }
    }
  }
  return cats;
}

module.exports = {
  countCats,
};
