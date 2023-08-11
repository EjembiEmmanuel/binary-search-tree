import Tree from "./Tree.js";
import { prettyPrint, generateArray } from "./utils.js";

(function main() {
  const tree = new Tree([...generateArray().values()]);

  prettyPrint(tree.root);

  console.log("Balanced tree:", tree.isBalanced());

  console.log("Level order:", tree.levelOrder());
  console.log("In order:", tree.inOrder());
  console.log("Pre order:", tree.preOrder());
  console.log("Post order:", tree.postOrder());

  tree.insert(102);
  tree.insert(105);
  tree.insert(112);
  tree.insert(120);
  tree.insert(138);

  prettyPrint(tree.root);

  console.log("Balanced tree:", tree.isBalanced());

  tree.rebalance();

  prettyPrint(tree.root);

  console.log("Balanced tree:", tree.isBalanced());

  console.log("Level order:", tree.levelOrder());
  console.log("In order:", tree.inOrder());
  console.log("Pre order:", tree.preOrder());
  console.log("Post order:", tree.postOrder());
})();
