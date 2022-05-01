var line1 = readline().split(" ")
var size = parseInt(line1[0]);
var diff = parseInt(line1[1]);
var nums = readline().split(" ")

// 滑窗试一试
let left = 0,right = size-1
let count = 0

// 面试官老师，您题目写的是“序列”，难道不应该是已经排序好的意思吗...
nums.sort(function(a,b){return a-b})

while(left<right){
    if((nums[right]-nums[left]) > diff){
        count++
        right--
    }
    else{
        break
    }
}
print(count)