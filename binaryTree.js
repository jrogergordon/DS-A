/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 * Given the root of a binary tree, return an array of the
 * largest value in each row of the tree (0-indexed).
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) {
        return [];
    }
    let tree = [root]
    let currLvl = 1;
    let next = 0;
    currMax = -10000000000;
    maxS = [];
    while (tree.length > 0) {
        let curr = tree.shift();
        if (curr.left) {
            tree.push(curr.left);
            next++;
        }
        if (curr.right) {
            tree.push(curr.right);
            next++;
        }
        currMax = Math.max(currMax, curr.val);
        currLvl--;
        if (currLvl === 0) {
            maxS.push(currMax);
            currLvl = next;
            next = 0;
            currMax = -100000000000;
        }
    }
    return maxS;
};