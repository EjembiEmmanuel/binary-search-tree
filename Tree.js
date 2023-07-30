import Node from "./Node.js";
import { insertValue, deleteValue, findValue } from "./utils.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array) || null;
  }

  buildTree(arr) {
    arr = arr.sort();

    var start = 0;
    var end = arr.length - 1;

    if (start > end) {
      return null;
    }

    var mid = Math.floor((start + end) / 2);
    var node = new Node(arr[mid]);
    node.left = this.buildTree(arr.slice(start, mid));
    node.right = this.buildTree(arr.slice(mid + 1));

    return node;
  }

  find(value) {
    console.log(findValue(value, this.root));
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    insertValue(value, this.root);
  }

  delete(value) {
    if (this.root === null) {
      return this.root;
    }

    deleteValue(value, this.root);
  }
}
