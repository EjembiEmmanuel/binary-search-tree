import Tree from "./Tree.js";
import { prettyPrint } from "./utils.js";

(function main() {
  const tree = new Tree([]);
  prettyPrint(tree.root);

  tree.insert(6);
  tree.insert(5);
  tree.insert(7);
  tree.insert(8);
  tree.insert(9);
  // prettyPrint(tree.root);

  tree.delete(7);
  prettyPrint(tree.root);
  tree.find(8);

  tree.levelOrder();
  tree.inOrder();
  tree.preOrder();
  tree.postOrder();
})();
