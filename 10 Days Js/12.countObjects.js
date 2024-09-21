function getCount(objects) {
    let count = 0
    
    for(let i = 0; i<objects.length; i++){
        // console.log(objects[i]["x"])
        if(objects[i]["x"] === objects[i]["y"] ) {
            count++
        }
        
       
    }
    return count;

    
}