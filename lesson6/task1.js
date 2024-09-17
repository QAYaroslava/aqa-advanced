//Function Declaration
function getRectangleArea1(width, height){
    return width * height
}
console.log(getRectangleArea1(10,12))

//Function Expression
const getRectangleArea2 = function(width, height){
    return width * height
}
console.log(getRectangleArea2(11,11))

//Concise Arrow Function Expression
const getRectangleArea3 = (width, height) => width * height
console.log(getRectangleArea3(7,9))