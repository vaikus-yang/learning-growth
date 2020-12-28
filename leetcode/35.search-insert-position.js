/* 
35.搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let last = nums.length - 1;
  if (target > nums[last]) return nums.length;
  else if (target < nums[0]) return 0;

  let start = 0;
  let mid = 0;
  let mid_num = 0;

  while (true) {
    mid = Math.floor((start + last) / 2);
    mid_num = nums[mid];

    if (target === mid_num) return mid;
    else if (last - start == 1) return start + 1;
    else if (target < mid_num) last = mid;
    else if (target > mid_num) start = mid;
  }
};
