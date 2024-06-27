function makeLine(size, Char = "#") {
    let line = Char;
    for (let i = 0; i < size; i++) {
      line += Char;
    }
    return line.slice(0, -1);
  }
/*
function makeSquare(size){
    let squareShape ='';
    for (let i = 0; i < size; i++) {
       squareShape += (makeLine(size)+'\n');
    }
    return squareShape;
}*/
function makeRectangle(width, height, Char) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width,Char) + '\n');
    }
    return rectangle.slice(0, -1);
  }
function makeSquare(size,Char){
    return makeRectangle(size,size, Char);
}
function makeDownwardStairs(height,Char) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1,Char) + '\n');
    }
    return stairs.slice(0, -1);
  }
  function makeSpaceLine(numSpaces, numChars, Char){
     let spaceLine = makeLine(numSpaces," ") + makeLine(numChars,Char) + makeLine(numSpaces," ");
    return spaceLine
    }
 function makeIsoscelesTriangle(height,Char) {
    let triangle = '';
     for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1,Char) + '\n');
     }
     return triangle.slice(0, -1);
    }
    function reverse(str) {
        let reversed = '';
        for (let i = 0; i < str.length; i++) {
            reversed = str[i] + reversed;
        }
        return reversed;
    }
 function makeDiamond(height,Char){
    let diamond = 
    makeIsoscelesTriangle(height,Char) + '\n' +
    reverse(makeIsoscelesTriangle(height,Char));
return diamond
 }
console.log(makeLine(10,"a"));
console.log(makeSquare(4,"b"));
console.log(makeRectangle(10, 6,"c"));
console.log(makeDownwardStairs(5,"d"));
console.log(makeSpaceLine(2, 5,"e"));
console.log(makeIsoscelesTriangle(5,"f"));
console.log(makeDiamond(5,"g"),);

