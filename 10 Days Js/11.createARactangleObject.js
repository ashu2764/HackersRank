function Rectangle(a, b) {
    let rectObj = {
        length : a,
        width : b,
        perimeter: (2*(a+b)),
        area:(a*b)
        
    }
    return rectObj;
}