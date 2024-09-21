function getSecondLargest(nums) {
    // Complete the function
    
    for(let i = 0; i<nums.length; i++){
        for(let j =0 ; j<nums.length;j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j]=nums[j+1]
                nums[j+1] = temp;
            }
        }
        
    }
    let unique = [...new Set(nums)]
    
    // console.log(unique)
    const n = unique.length;
    for(let i=0 ; i<n; i++){
        return (unique[n-2])
    }
    
}

console.log(getSecondLargest([1,5,3,7,9,9]))