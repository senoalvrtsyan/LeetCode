class Solution {
public:
    char arrTop(stack<char> &arr) {
        return arr.empty() ? 0 : arr.top();
    }

    bool isValid(string s) {
        stack<char> bracesStack;

        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == '[' || s[i] == '{' || s[i] == '(') {
                bracesStack.push(s[i]);
            } else {
                char top = arrTop(bracesStack);
                if (
                    (bracesStack.empty()) ||
                    (top == '[' && s[i] != ']') ||
                    (top == '{' && s[i] != '}') ||
                    (top == '(' && s[i] != ')')
                ) {
                    return false;
                }
                bracesStack.pop();
            }
        }
        return bracesStack.empty();
    }
};