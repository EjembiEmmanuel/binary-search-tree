import Node from "./Node.js";

function buildTree(array) {
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
}

export { buildTree };
