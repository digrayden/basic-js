const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const column = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(column).fill(0));
  const direction = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < column; col++) {
      if (matrix[row][col]) {
        direction.forEach(([dx, dy]) => {
          const newRow = row + dx;
          const newColumn = col + dy;
          if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < column) {
            result[newRow][newColumn]++;
          }
        });
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
