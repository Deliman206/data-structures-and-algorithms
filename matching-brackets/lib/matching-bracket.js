'use strict';

const match = (string) => {
  const stack = [];
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      stack.push(string[i]);
    }
    if (close.includes(string[i])) {
      if (string[i] === close[0]) {
        if (stack[stack.length - 1] === open[0]) {
          stack.pop();
        }
      }
      if (string[i] === close[1]) {
        if (stack[stack.length - 1] === open[1]) {
          stack.pop();
        }
      }
      if (string[i] === close[2]) {
        if (stack[stack.length - 1] === open[2]) {
          stack.pop();
        }
      }
    }
  }
  return !stack.length;
};

export default match;
