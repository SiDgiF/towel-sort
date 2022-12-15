
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++)
        if (!Array.isArray(matrix[i]))
            result.push(matrix[i]);
        else
            result = result.concat(towelSort(matrix[i]));
    return result;
};
