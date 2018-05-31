import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import btFindMatch from '../lib/bt-find-match';

describe('Should validate bt-find-match function', () => {
  test('Should return array of all matches', () => {
    const one1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);

    one1.left = two1;
    one1.right = four1;
    two1.right = three1;
    four1.left = five1;

    const one2 = new Node(1);
    const two2 = new Node(2);
    const three2 = new Node(3);
    const four2 = new Node(4);
    const five2 = new Node(5);

    one2.left = two2;
    one2.right = four2;
    four2.left = five2;
    
    const tree1 = new BinaryTree(one1);
    const tree2 = new BinaryTree(two2);
    
    expect(btFindMatch(tree1, tree2)).toEqual();
  });
  // test('Should return NO MATCHES', () => {
  //   const one1 = new Node(1);
  //   const two1 = new Node(2);
  //   const three1 = new Node(3);
  //   const four1 = new Node(4);
  //   const five1 = new Node(5);

  //   one1.left = two1;
  //   one1.right = four1;
  //   two1.right = three1;
  //   four1.left = five1;

  //   const tree1 = new BinaryTree(one1);
  //   const tree3 = new BinaryTree(new Node(10));
  //   expect(btFindMatch(tree1, tree3)).toEqual('no matches');
  // });
});
