const arr=new Array(3)
arr[0]=1
console.log(arr)
arr[1]=3
arr[2]=5
console.log(arr)
arr[3]=7
console.log(arr)
arr[4]=9
console.log(arr)
arr[5]=11
console.log(arr)
console.log("Length="+arr.length)
console.log(arr.at(2))
console.log(Array.isArray(arr))
var a=5
console.log(Array.isArray(a))
arr[0]=10
console.log(arr)
sum=0
var i=1
for(i=0;i<arr.length;i++)
{
    sum+=arr[i]
}
console.log("Sum="+sum)