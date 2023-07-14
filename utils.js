import Node from "./Node.js";

const insertValue = (value, node) => {
  if (node.left === null && node.right === null) {
    if (node.data < value) {
      node.right = new Node(value);
    } else {
      node.left = new Node(value);
    }
    return node;
  }

  if (node.data < value) {
    return insertValue(value, node.right);
  } else {
    return insertValue(value, node.left);
  }
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

export { prettyPrint, insertValue };
