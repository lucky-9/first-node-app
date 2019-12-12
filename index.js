var rectangle ={
        perimeter : (x, y) => 2*(x+y),
        area: (x, y) => (x*y)
};


var solveRect = (l,b) =>{

    console.log(`solveRect called with l = ${l} and b = ${b}`);
    if((l<=0) || (b<=0)){
        console.log("enter values greater than zero");
    }
    else{
        console.log("The perimeter is" + rectangle.perimeter(l,b));
        console.log("The Area is" + rectangle.area(l,b));
    }

}


solveRect(2,3);
solveRect(2,4);
solveRect(0,5);
solveRect(-3,0);
