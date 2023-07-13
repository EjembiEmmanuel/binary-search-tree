import Node from "./Node.js";

const buildTree = (array) => {
  array = array.sort();

  var start = 0;
  var end = array.length - 1;

  if (start > end) {
    return null;
  }

  var mid = Math.floor((start + end) / 2);
  var node = new Node(array[mid]);
  node.left = buildTree(array.slice(start, mid));
  node.right = buildTree(array.slice(mid + 1));

  return node;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(buildTree([3, 5, 1, 4, 2, 6, 7, 9]));

export { buildTree };
