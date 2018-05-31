class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
    this.state = {
      solution: null,
    };
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
    } else {
      console.log('node', node);
      this._insert(this.root, node);
      // console.log('done');
    }
    console.log('how many times?', this.state.solution);
    return this.state.solution;
  }

  _insert(root, node) {
    if (node.value === root.value) {
      this.state.solution = node.value;
    } else
    if (node.value.length < root.value.length) {
      if (!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else if (!root.right) {
      root.right = node;
    } else {
      this._insert(root.right, node);
    }
  }
}

export default BinarySearchTree;
