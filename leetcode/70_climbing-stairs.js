/* 
70.爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶 
*/

/**
 * @param {number} n
 * @return {number}
 */

/*
方法1 递归
但是超出时间限制
*/
var climbStairs = function(n){
    const helper = (s)=>{ 
        if(s<3) return s;
        return helper(s-1) + helper(s-2);
    }

    return helper(n)
},


/* 方法2 尾递归 
避免栈溢出
*/
var climbStairs2 = function(n){
    const helper = (s, a=1, b=1)=>{
        if(s<=1) return b;
        return helper(s-1, b, a+b)
    }

    return helper(n)
}