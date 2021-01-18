
module.exports = function towelSort (matrix = []) {
  let towelArray = matrix.map((item, index) => (index + 1) % 2 === 0 ? item.reverse() : item)
  return [].concat(...towelArray)
}
