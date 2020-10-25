module.exports = function check(str, bracketsConfig) {
            let stack = [], open = "([{", close = ")]}";
            for (const ch of str)
            {
                let i = open.indexOf(ch);
                if (i > -1) stack.push(close[i]);
                if (close.includes(ch) && ch != stack.pop()) return false
            }
            return stack.length == 0;
        }
