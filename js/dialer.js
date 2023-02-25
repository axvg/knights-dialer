export default {
  reachableKeys,
  countPaths,
  listAcyclicPaths
};


// ****************************

var dialpad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [, 0,]
];

function reachableKeys(startingDigit) {
  var nearbyKeys = [];

  for (let [rowIdx, row] of dialpad.entries()) {
    let coldIdx = row.indexOf(startingDigit);

    if (coldIdx != -1) {
      for (let rowMove of [-2, -1, 1, 2]) {
        for (let colMove of [-2, -1, 1, 2]) {
          if (Math.abs(rowMove) != Math.abs(colMove)) {
            if (
              rowIdx + rowMove >= 0 &&
              rowIdx + rowMove <= 3 &&
              coldIdx + colMove >= 0 &&
              coldIdx + colMove <= 2 &&
              dialpad[rowIdx + rowMove][coldIdx + colMove] != undefined
            ) {
              nearbyKeys.push(
                dialpad[rowIdx + rowMove][coldIdx + colMove]
              )
            }
          }
        }
      }
    }
  }

  return nearbyKeys
}

function countPaths(startingDigit, hopCount) {
  return 0;
}

function listAcyclicPaths(startingDigit) {
  return [];
}
