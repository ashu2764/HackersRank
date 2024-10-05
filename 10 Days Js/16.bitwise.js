let getMaxLessThenK = (n, k)=>{

    let maxAnd = 0;
    
    for(let a = 0; a<n; a++){
        for(let b = a+1; b <=n; b++){
            let currentAnd = a & b ;
            if(currentAnd < k){
                maxAnd = Math.max(maxAnd, currentAnd)
            }
        }
    }
    return maxAnd;

}