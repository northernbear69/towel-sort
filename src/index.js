module.exports = function towelSort (matrix) {
  let result = [];
  if(!Array.isArray(matrix)) return result;
  matrix.forEach((element, i) => {
    (i % 2 === 1) ? result = result.concat(element.reverse()) : result = result.concat(element);
  });
  return result;
}