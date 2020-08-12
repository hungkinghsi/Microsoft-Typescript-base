interface A {
   x: number;
}

let a: A = { x: 3 }
let b: { x: number | string } = a;
b.x = "unsound";
let x: number = a.x; // 不健全

a.x.toFixed(0); // ？