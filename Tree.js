import { buildTree } from "./utils.js";

export default class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
}
