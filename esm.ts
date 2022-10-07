import f from "./foo";

export const p = new Promise((resolve, _reject) => {
  resolve(100);
});

export const p2 = new Promise((resolve) => resolve(200));

let x: number | boolean = 1;
x = +1;
x = -2;
x = !3;
x = !3;
