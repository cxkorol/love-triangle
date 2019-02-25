/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.unshift(0);
    
    for (let i = 1; i < preferences.length; i++) {
      let j = preferences[i];
      let k = preferences[j];
      count += i == preferences[k];
    }
  return Math.floor(count / 3);
};