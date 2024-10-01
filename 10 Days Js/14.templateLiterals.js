function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    
    // Solve for sides using the quadratic formula
    let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    
    // Return the sides sorted in ascending order
    return [s1, s2].sort((a, b) => a - b);
}
// function sides(literals, ...expressions) {
//     let [A, P] = expressions; // Area (A) and Perimeter (P)
    
//     // Solve the system of equations:
//     // l + w = P / 2
//     // l * w = A
    
//     let s1 = (P + Math.sqrt((P * P) - 16 * A)) / 4;
//     let s2 = (P - Math.sqrt((P * P) - 16 * A)) / 4;
    
//     // Return the sides in ascending order
//     return [s1, s2].sort((a, b) => a - b);
// } 
