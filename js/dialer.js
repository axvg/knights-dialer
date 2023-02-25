export default {
  reachableKeys,
  countPaths,
  listAcyclicPaths
};


// ****************************


var nearbyKeys = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [3, 9, 0],
  [],
  [1, 7, 0],
  [2, 6],
  [1, 3],
  [2, 4]
];

function reachableKeys(startingDigit) {
  return nearbyKeys[startingDigit]
}

function countPaths(startingDigit, hopCount) {
  if (hopCount == 0) return 1;
  var pathCount = 0

  for (let digit of nearbyKeys[startingDigit]) {
    pathCount += countPaths(digit, hopCount - 1)
  }

  return pathCount
}

function listAcyclicPaths(startingDigit) {
  return [];
}
