'use strict';

const fizzBuzzTree = (binaryTree) => {
  if(!binaryTree.root) return undefined;
 return visit(binaryTree.root);
};

const visit = (node) => {
  if (!node) return undefined;
  if (node.value % 3 === 0 && node.value % 5 === 0) node.value = 'fizz buzz';
  if (node.value % 3 === 0) node.value = 'fizz';
  if (node.value % 5 === 0) node.value = 'buzz';
  visit(node.left);
  visit(node.right);
  return node;
};

export default fizzBuzzTree;