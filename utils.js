import Node from "./Node.js";

const findValue = (value, node) => {
  if (node === null) {
    return null;
  }

  if (node.data === value) {
    return node;
  } else if (node.data > value) {
    return findValue(value, node.left);
  } else if (node.data < value) {
    return findValue(value, node.right);
  }
};

const deleteValue = (value, node) => {
  if (node === null) {
    return node;
  }

  if (node.data > value) {
    node.left = deleteValue(value, node.left);
    return node;
  } else if (node.data < value) {
    node.right = deleteValue(value, node.right);
    return node;
  }

  if (node.left === null) {
    let temp = node.right;
    node = null;
    return temp;
  } else if (node.right === null) {
    let temp = node.left;
    node = null;
    return temp;
  } else {
    let succParent = node;

    let succ = node.right;
    while (succ.left !== null) {
      succParent = succ;
      succ = succ.left;
    }

    if (succParent !== node) {
      succParent.left = succ.right;
    } else {
      succParent.right = succ.right;
    }

    node.value = succ.value;

    return node;
  }
};

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
    if (node.right === null) {
      node.right = new Node(value);
      return;
    }

    return insertValue(value, node.right);
  } else {
    if (node.left === null) {
      node.left = new Node(value);
      return;
    }

    return insertValue(value, node.left);
  }
};

const breadthFirst = (node) => {
  if (node === null) {
    return;
  }

  var result = [];
  var queqe = [];
  queqe.push(node);

  while (queqe.length > 0) {
    let currentNode = queqe[0];
    result.push(currentNode.data);

    if (currentNode.left !== null) {
      queqe.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queqe.push(currentNode.right);
    }

    queqe.shift();
  }

  return result;
};

const depthFirstInOrder = (node, arr = []) => {
  if (node === null) {
    return;
  }

  depthFirstInOrder(node.left, arr);
  arr = merge(node, arr);
  depthFirstInOrder(node.right, arr);

  return arr;
};

const depthFirstPreOrder = (node, arr = []) => {
  if (node === null) {
    return;
  }

  arr = merge(node, arr);
  depthFirstPreOrder(node.left, arr);
  depthFirstPreOrder(node.right, arr);

  return arr;
};

const depthFirstPostOrder = (node, arr = []) => {
  if (node === null) {
    return;
  }

  depthFirstPostOrder(node.left, arr);
  depthFirstPostOrder(node.right, arr);
  arr = merge(node, arr);

  return arr;
};

const merge = (node, arr) => {
  arr.push(node.data);

  return arr;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    console.log("Tree is empty");
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

const maxDepth = (node) => {
  if (node === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);

    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }
};

const checkHeightBalance = (node) => {
  if (node === null) {
    return 0;
  }

  var leftSubtreeHeight = checkHeightBalance(node.left);
  var rightSubtreeHeight = checkHeightBalance(node.right);
  if (leftSubtreeHeight === -1 || rightSubtreeHeight === -1) {
    return -1;
  }

  if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
    return -1;
  }

  return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
};

const generateArray = () => {
  var randoms = new Set();

  while (randoms.size < 10) {
    randoms.add(1 + Math.floor(Math.random() * 100));
  }

  return randoms;
};

export {
  prettyPrint,
  insertValue,
  deleteValue,
  findValue,
  breadthFirst,
  depthFirstInOrder,
  depthFirstPreOrder,
  depthFirstPostOrder,
  maxDepth,
  checkHeightBalance,
  generateArray,
};
