import Tree from "./Tree.js";
import { prettyPrint } from "./utils.js";

(function main() {
  const tree = new Tree([]);

  tree.insert(6);
  tree.insert(5);
  tree.insert(7);
  tree.insert(8);
  tree.insert(9);
  tree.insert(4);
  tree.insert(3);

  tree.delete(7);
  prettyPrint(tree.root);

  console.log("Found Node:", tree.find(8));
  console.log("Level order:", tree.levelOrder());
  console.log("In order:", tree.inOrder());
  console.log("Pre order:", tree.preOrder());
  console.log("Post order:", tree.postOrder());
  console.log("Depth:", tree.depth());
  console.log("Height:", tree.height(5));
})();
