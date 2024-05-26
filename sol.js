const flattened=function(arr,n){
    const result=[];

    function helper(arr,depth){
        

        for(let val of arr){
            if(typeof val==="object" &&depth<n){
                helper(val,depth+1);
            }else{
            result.push(val);
        }
    }
return result;}
return helper(arr,0);

}
//example1
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 0;
//example2
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 1; 
//example3
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;
console.log(flattened(arr,n));