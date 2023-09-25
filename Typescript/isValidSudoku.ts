function isValidSudoku(board: string[][]): boolean {
    const size = 9;

    for (let i = 0; i < size; i++) {
        const rowSet = new Set<string>();
        const colSet = new Set<string>();
        const subgridSet = new Set<string>();

        for (let j = 0; j < size; j++) {
            const rowVal = board[i][j];
            const colVal = board[j][i];
            const subgridVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if (rowVal !== '.') {
                if (rowSet.has(rowVal)) {
                    return false;
                }
                rowSet.add(rowVal);
            }

            if (colVal !== '.') {
                if (colSet.has(colVal)) {
                    return false;
                }
                colSet.add(colVal);
            }

            if (subgridVal !== '.') {
                if (subgridSet.has(subgridVal)) {
                    return false;
                }
                subgridSet.add(subgridVal);
            }
        }
    }

    return true;
}
