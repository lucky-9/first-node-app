var rectangle = require('./rectangle.js');


function solveRect(l,b){
    console.log(`solveRect() is called with l= ${l} and b = ${b} `);
    rectangle(l, b, (err, rectangle) =>{
        if(err){
            console.log("ERROR  :"+err.message);
        }
        else{
            console.log(`The area of the rectange with l= ${l} and b = ${b} is ${rectangle.area()}`);
            console.log(`The perimeter of the rectange with l= ${l} and b = ${b} is ${rectangle.perimeter()}`);
        }
    });
}









solveRect(2,3);
solveRect(2,4);
solveRect(0,5);
solveRect(-3,0);
