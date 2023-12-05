// You are given two non - empty linked lists representing two non - negative integers.
// The most significant digit comes first and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = "";
    let num2 = "";

    function addNums(x, y) {
        let sum = new Array(x.length + y.length).fill(0);


        let carryOver = 0;
        let xCurr = x.length - 1;
        let yCurr = y.length - 1;
        let curr = 0;
        for (let i = sum.length - 1; i >= 0; i--) {
            if (x[xCurr] && y[yCurr]) {
                curr = Number(x[xCurr]) + Number(y[yCurr]) + carryOver;
            } else if (x[xCurr]) {
                curr = Number(x[xCurr]) + carryOver;
            } else if (y[yCurr]) {
                curr = Number(y[yCurr]) + carryOver;
            } else {
                if (carryOver === 1) {
                    sum[i] = "1"
                }
                while (sum[0] === 0) {
                    sum.shift();
                }
                return sum.join('');
            }
            carryOver = 0;
            if (curr > 9) {
                carryOver = 1;
                curr = curr % 10;
            }
            sum[i] = `${curr}`;
            xCurr--;
            yCurr--;
        }
    }

    function linkify(num) {
        if (num.length === 1) {
            return new ListNode(Number(num))
        }
        let head = new ListNode(0)
        let curr = new ListNode();
        head.next = curr;
        let i = 0
        while (i < num.length) {
            curr.val = Number(num[i]);
            i++;
            if (i < num.length) {
                curr.next = new ListNode;
                curr = curr.next;
            }
        }
        return head.next;
    }

    while (l1) {
        num1 = num1 + l1.val
        l1 = l1.next;
    }

    while (l2) {
        num2 = num2 + l2.val
        l2 = l2.next;
    }
    let num = addNums(num1, num2)
    return linkify(num);
}


// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // let dummyOne = new ListNode(0, l1)
    // let dummyTwo = new ListNode(0, l2);

    let head;
    let dummy;

    let curr;
    let carryOver = 0;
    let cont = 1;
    while (l1 && l2 && (cont === 1 || cont === true)) {

        if (cont === 1) {
            head = new ListNode()
            dummy = new ListNode(0, head);
            cont = true;
        } else {
            head.next = new ListNode();
            head = head.next;
        }
        curr = l1.val + l2.val + carryOver;
        carryOver = 0;
        if (curr > 9) {
            carryOver = 1;
            curr = curr % 10;
        }
        // l1.val = curr;
        // l2.val = curr;
        head.val = curr;


        if (carryOver === 1 && !l1.next && !l2.next) {
            head.next = new ListNode(1)
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    // let num;

    if (!l1 && !l2) {
        return dummy.next;
    } else {
        if (l1) {
            curr = l1;
            // num = dummyOne
        } else {
            curr = l2;
            // num = dummyTwo
        }
    }
    head.next = new ListNode();
    head = head.next;
    cont = true;
    while (curr && cont) {
        head.val = curr.val + carryOver;
        carryOver = 0;
        if (head.val > 9) {
            carryOver = 1
            head.val = head.val % 10;
        }
        if (curr.next) {
            curr = curr.next;
            head.next = new ListNode();
            head = head.next;
        } else {
            if (carryOver === 1) {
                head.next = new ListNode(1)
            }
            cont = false;
        }
    }

    return dummy.next;
};