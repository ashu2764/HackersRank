
function factorial(num){
    //4 = 4*3*2*1 => 24;
    //3= 3*2*1=> 6
    let fact = 1;
    
    for(let i=1; i<= num; i++){
        fact *= i
    }
  return fact
}
    
console.log(factorial(4))