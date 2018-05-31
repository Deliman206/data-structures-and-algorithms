export default function btFindMatch(tree1, tree2) {
  const compare1 = [];
  const compare2 = [];
  const solution = [];

  function traverseRecord1(tree) {
    if (tree.root) {
      compare1.push(tree.root.value);
      console.log('how many times');
      if (tree.root.left) {
        console.log('hit left');
        traverseRecord1(tree.root.left);
      }
      if (tree.root.right) {
        traverseRecord1(tree.root.right);
      }
    }
  }
  function traverseRecord2(tree) {
    if (tree.root) {
      compare2.push(tree.root.value);
      if (tree.root.left) {
        traverseRecord2(tree.root.left);
      }
      if (tree.root.right) {
        traverseRecord2(tree.root.right);
      }
    }
  }

  traverseRecord1(tree1);
  traverseRecord2(tree2);

  for (let i = 0; i < compare1.length; i++) {
    if (compare2.includes(compare1[i])) {
      solution.push(compare1[i]);
    }
    console.log('compare1', compare1);
    console.log('compare2', compare2);
    return 'no matches';
  }
  return solution;
}
