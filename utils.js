import Node from "./Node.js";

const findValue = (value, node) => {
  if (node === null) {
    return "Value doesn't exist";
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

export { prettyPrint, insertValue, deleteValue, findValue };
