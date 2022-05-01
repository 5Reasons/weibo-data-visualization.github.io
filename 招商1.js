var line1 = readline().split(" ")
var size1 = parseInt(line1[0])
var size2 = parseInt(line1[1])

var nums1 = readline().split(" ")
var nums2 = readline().split(" ")

let count = 0
let one_four = 0,one_two = 0
let two_four = 0,two_two = 0
// 数学方法
// 处理nums1
for(let i = 0;i<nums1.length;i++){
    if(nums1[i]%4 ===0)
        one_four++
    if(nums1[i]%2 === 0 && nums1[i]%4 !=0)
        one_two++
}
// 处理nums2
for(let i = 0;i<nums2.length;i++){
    if(nums2[i]%4 ===0)
        two_four++
    if(nums2[i]%2 === 0 && nums2[i]%4 !=0)
        two_two++
}
// nums1 和 nums2 组合
// 俩都是4的倍数
count+= one_four * two_four
// 一个是4的倍数，一个不是
count = count + one_four * (size2-two_four) + two_four * (size1-one_four)
// 俩都是：既是2的倍数，又不是4的倍数
count = count + one_two*two_two

print(count)

// ac 85.71%