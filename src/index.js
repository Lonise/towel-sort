
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix.length === 0) return ([]);

    let currentMatrix = matrix;
    let sortedArray = [];

    sortOdd = (a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    };

    sortEven = (a, b) => {
        if (a > b) return -1;
        if (a === b) return 0;
        if (a < b) return 1;
    };    

    for (let i = 0; i < currentMatrix.length; i ++) {
            if (i % 2 === 0 ) { //even
                currentMatrix[i].sort(sortOdd);   
            }
            else { //odd
                currentMatrix[i].sort(sortEven);
            }
        sortedArray = sortedArray.concat(currentMatrix[i]);
    }
    
  return sortedArray;
}
