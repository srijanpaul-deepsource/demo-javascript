class Calculator {
    constructor(public a: unknown, private b: any){
        this.a = a 
        this.b = b
    }

    sum(a: any = 0, b: number ){
    return a + b;
}
}