const  modifyArray =(nums)=> {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] % 2 == 0){
            nums[i] = nums[i]*2
            // console.log(nums)
        }if(nums[i]%2 === 1 ){
             nums[i] = nums[i]*3
        }
    }
    
    return nums
}