import Tree from "./Tree.js";
import { prettyPrint } from "./utils.js";

var arr = [0, 3, 5, 4, 2, 1];
const tree = new Tree(arr);
prettyPrint(tree.root);

// tree.insert(6, tree.root);
// prettyPrint(tree.root);
