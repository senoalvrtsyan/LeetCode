function arrTop(arr: string[]): string {
    return arr.length > 0 ? arr[arr.length - 1] : "";
}

function isValid(s: string): boolean {
    const bracesStack: string[] = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
            bracesStack.push(s[i]);
        } else {
            const top = arrTop(bracesStack);
            if (
                bracesStack.length === 0 ||
                (top === "[" && s[i] !== "]") ||
                (top === "{" && s[i] !== "}") ||
                (top === "(" && s[i] !== ")")
            ) {
                return false;
            }
            bracesStack.pop();
        }
    }
    return bracesStack.length === 0;
}