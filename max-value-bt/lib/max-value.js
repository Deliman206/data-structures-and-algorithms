'use strict';

function _visit(root) {
  let temp = null;
  if (root.value > temp) temp = root.value;
  _visit(root.left);
  _visit(root.right);
  return temp;
}
function findMaxValue(binaryTree) {
  if (!binaryTree.root) return undefined;
  return _visit(binaryTree.root);
}

export default findMaxValue;
