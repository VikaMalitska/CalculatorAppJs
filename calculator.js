 class Calculator{
    sum (a=0,b=0){
        return  Number(a) + Number(b);
    }

    mul(a=0,b=0) {
        return Number(a) * Number(b);
    }

    div(a=0, b=0) {
        return a / b;
    }

    sub(a=0, b=0) {
      return a - b;
    }
}

class Display {
    constructor(){
        this.a = 0;
        this.b = 0;
        this.operator = "";
        this.isenabled = false;
    }
}
export {Calculator, Display};
