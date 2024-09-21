function reverseString(s) {
    let newStr;
    
    try{
      newStr=   s.split('').reverse().join('')
      console.log(newStr)
 
    }catch(error){
        console.log(error.message);
        console.log(s)
        
    }
}

reverseString(Number(1234))