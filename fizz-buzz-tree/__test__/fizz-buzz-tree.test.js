'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import fizzBuzzTree from '../lib/fizz-buzz-tree';

describe('Should validate the fizz-buzz-tree algorythm', () => {
  test('Should transform the binary-tree to a fizz-buzz-tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const ten = new Node(10);
    const eleven = new Node(11);
    const twelve = new Node(12);
    const thirteen = new Node(13);
    const fourteen = new Node(14);
    const fifteen = new Node(15);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = nine;

    nine.left = ten;
    nine.right = thirteen;

    thirteen.left = fourteen;
    thirteen.right = fifteen;

    ten.left = eleven;
    ten.right = twelve;

    two.left = three;
    two.right = six;

    six.left = seven;
    six.right = eight;

    three.left = four;
    three.right = five;
    
    fizzBuzzTree(tree);

    expect(three.value).toEqual('fizz');
    expect(five.value).toEqual('buzz');
    expect(fifteen.value).toEqual('fizz buzz');
  });
  test('Should return null for empty binary tree', () => {
    const tree = new BinaryTree();
    fizzBuzzTree(tree);
    expect(tree.root).toEqual(null);
  })
});