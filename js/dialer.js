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
  return 0;
}

function listAcyclicPaths(startingDigit) {
  return [];
}
