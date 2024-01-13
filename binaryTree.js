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

// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function (root) {
    let swap = false;
    let curr = [root];
    let n = 1;
    let o = 0;
    while (curr.length > 0) {
        let left = null;
        let right = null;
        let currNode = curr.shift();
        if (currNode && currNode.right) {
            console.log("hit1");
            o++;
            curr.push(currNode.right);
            right = currNode.right;
            currNode.right = null;
        }
        if (currNode && currNode.left) {
            console.log("hit2");
            o++;
            curr.push(currNode.left);
            left = currNode.left
            currNode.left = null;
        }
        if (left !== null) {
            console.log("hit3");
            currNode.right = left;
        }
        if (right !== null) {
            console.log("hit4");
            currNode.left = right;
        }
        n--;
        if (n === 0) {
            n = o;
            o = 0;
        }
    }
    return root;
};