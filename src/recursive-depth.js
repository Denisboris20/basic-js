class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    let currentDepth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        currentDepth += this.calculateDepth(item);
      }

      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }

      currentDepth = 1;
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
