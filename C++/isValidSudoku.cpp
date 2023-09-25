class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        std::unordered_set<int> set;
        for (auto & row : board) {
            for (char i : row) {
                if (i == '.') continue;
                if (!set.insert(i).second) {
                    return false;
                }
            }
            set.clear();
        }

        for (int col = 0; col < board[0].size(); ++col) {
            for (int i = 0; i < board[col].size(); ++i) {
                if (board[i][col] == '.') continue;
                if (!set.insert(board[i][col]).second) {
                    return false;
                }
            }
            set.clear();
        }

        std::vector<std::vector<std::unordered_set<char>>> squaresSet;
        squaresSet.reserve(3);
        squaresSet.resize(3);
        for (int i = 0; i < 3; ++i) {
            squaresSet[i].reserve(3);
            squaresSet[i].resize(3);
        }
        for (int row = 0; row < board.size(); ++row) {
            int sqRow = row / 3;
            for (int col = 0; col < board[row].size(); ++col) {
                int sqCol = col / 3;
                if (board[row][col] == '.') continue;
                if (!squaresSet[sqRow][sqCol].insert(board[row][col]).second) {
                    return false;
                }
            }
        }
        return true;
}
};