class SampleClass {
    files = {}
    a: number
    b: number

    public static get myField1() {
      return 1;
    }

    public constructor() {
      this.a = 1,
      this.b = 2
    }
  
    private get ['myField2']() {
        const x = { ...this.files } as T;
        if (false) {
            // @ts-ignore: Unreachable code error
            return 'hello world';
          } if(x){
              return x
          }else {
              return 'hello world'
          }
      
    }
  }
  