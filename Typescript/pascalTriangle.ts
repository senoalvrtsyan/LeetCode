function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return [[0]];
    }
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1], [1, 1]];
    }

    const res: number[][] = [[1], [1, 1]];
    for (let rowIdx = 2; rowIdx < numRows; ++rowIdx) {
        const rowArray: number[] = [1];
        for (let i = 1; i < rowIdx; ++i) {
            rowArray.push(res[rowIdx - 1][i - 1] + res[rowIdx - 1][i]);
        }
        rowArray.push(1);
        res.push(rowArray);
    }
    return res;
}