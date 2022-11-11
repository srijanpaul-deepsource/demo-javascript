class C {
  a: number
  b: number
  x: string
  public constructor() {
    this.a = 1,
    this.b = 2,

    this.x = 'xx'
  }
}

export function foo() {
  const arr = [1, 2, 3]
  for (const x in arr) {
    console.log(x)
  }
}

console.log('barfoo')

