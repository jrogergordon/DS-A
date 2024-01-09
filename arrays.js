// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing
//  a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit,
//  return 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;

};


// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit,
//  return 0.


var maxProfit = function (prices) {
    let min = Number.MAX_VALUE;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
};



// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and / or sell the stock.You can only hold at most one share of the stock at any time.However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.
var maxProfit = function (prices) {
    let sum = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            sum = sum + prices[i] - prices[i - 1];
        }
    }

    return sum;


}; //


// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let curr = 0;
    while (min <= max) {
        curr = Math.floor((min + max) / 2)
        if (nums[curr] === target) return curr
        if (nums[curr] < target) {
            min = curr + 1
        } else {
            max = curr - 1;
        }
    }
    if (nums[curr] === target) return curr;
    return -1;
};

// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
var threeSum = function (nums) {
    let sums = new Map();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let curr = new Map();
            curr.set(i, i);
            curr.set(j, j);
            sums.set(nums[i] + nums[j], [curr, nums[i], nums[j]])
        }
    }
    console.log(sums);
    for (let k = 0; k < nums.length; k++) {
        if (sums.has((0 - nums[k])) && !sums.get((0 - nums[k]))[0].has(k)) {
            res.push([nums[k], sums.get(0 - k)[1], sums.get(0 - k)[2]])
        }
    }
    return res;
};  

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i]; 

        if (map[target - n] >= 0) {
            return [map[target - n], i]
        }
        else {
            map[n] = i;   //use map to store the value and index position   
        } 
    }
}; 


// Given an array of integers nums sorted in non - decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.



var searchRange = function (nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }

    let calcAns = function (x) {
        let bot = x;
        let top = x;
        while (nums[bot] === target) {
            bot--;
        }
        bot++;
        while (nums[top] === target) {
            top++;
        }
        top--;
        return [bot, top];
    }

    let i = 0;
    let j = nums.length;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        console.log(mid);
        if (nums[mid] === target) {
            return calcAns(mid);
        } else if (nums[mid] > target) {
            j = mid - 1
            console.log(j);
        } else {
            i = mid + 1
        }
    }
    return [-1, -1];
};