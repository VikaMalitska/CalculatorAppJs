 class Calculator{
    constructor(){
        this.a = 0; 
        this.b = 0;
    }
    sum (a=0,b=0){
        return Num(a + b);
    }
}
export {Calculator};
