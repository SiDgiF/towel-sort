
// You should implement your task here.

module.exports = function towelSort(matrix) {
    // 1. если матрица не задана
    if (matrix == undefined) {
        return [];
    }
    else {
        // 2.перевернуть каждый 2й элемент
        for (i = 1; i < matrix.length; i += 2) {
            matrix[i].reverse()
        }
        // 3. опустить все элементы на общий уровень
        return matrix.flat()
    }
}

