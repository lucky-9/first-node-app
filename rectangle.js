module.exports = (x,y,myFunction) =>{
    if(x<=0 || y<=0){
        setTimeout(() =>
            myFunction(new Error("numbers have to be greater than zero") ,
            null),
            2000);
    }
    else{
        setTimeout(() =>
            myFunction(null, {
                area:() => (x*y),
                perimeter:() => (2*(x+y)) 
            }),
         2000);
    }
}


