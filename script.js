// Integer1
// let a = 8,
//     b = 5;
// let s;
// s = Math.sqrt(Math.sqrt(a ** 3 - b ** 3 + (a ** 3 + b ** 3)));
// console.log(s);

// Integer2
// let a = 4,
//     b = 9;
// let s;
// s = Math.pow((1 / 6) * Math.sqrt(a) + (1 / 3) * Math.sqrt(b), 2);
// console.log(s);

// Integer3
// let a = 765;
// let n1, n2, n3;
// n3 = a % 10;
// n2 = ((a - n3) / 10) % 10;
// n1 = (a - (n2 * 10 + n3)) / 100;
// console.log(n3 * 100 + n2 * 10 + n1);

// Integer4
// let a = 555;
// let n1, n2, n3;
// n3 = a % 10;
// n2 = ((a - n3) / 10) % 10;
// n1 = (a - (n2 * 10 + n3)) / 100;
// console.log(n2 * 100 + n1 * 10 + n3);

// Integer5
// let a = 4.5,
//     b = 9.6;
// let s;
// s = 9 * a**2 * b - 27 * a**2 * b**2 + 15 * b**2;
// console.log(s.toFixed(2));

// Integer6
// let r = 3,
//     n = 2,
//     a = 4,
//     b = 5;
// let s;
// s = Math.pow(1 + r / 100, n) / Math.sqrt(a ** 2 + b ** 2);
// console.log(s);

// Integer7
// let x1 = -3.9,
//     y1 = -8.2,
//     x2 = -1.3,
//     y2 = -2.9;
// let l;
// l = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// console.log(l.toFixed(2));

// Integer8
// let x1 = -9.7,
//     y1 = -9.9,
//     x2 = 0,
//     y2 = 2.9,
//     x3 = -0.1,
//     y3 = 5.2;

// let a, b, c;
// a = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
// b = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// c = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);

// let p, P;
// P = a + b + c;
// p = P / 2;

// let S;
// S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// console.log(P.toFixed(2), S.toFixed(2));

// Integer9
// let a = -0.5;

// console.log(Math.sin(a));

// Integer10
// let a = 0.5;
// console.log(Math.cos(a));

// Integer11
// let a = 10;
// let n1, n2, n3;
// n2 = a % 10;
// n1 = ((a - n2) / 10) % 10;
// console.log(n1 + n2, n1 * n2);

// Integer12
// let n = 12;
// let s = 2 * Math.pow(n + 3, 2);
// console.log(s);

// Integer13
// let n = 5;
// let s = Math.pow((n + 3) / 2, 2);
// console.log(s);

// Integer14
// let n = 4,
//     x = 2;
// let s = Math.pow(n, x) + Math.pow(6, x);
// console.log(s);

// Integer15
// let n = -45;
// console.log(Math.abs(n));

// Integer16
// let n = 3.456;
// console.log(n.toFixed(2));

// Integer17
// let x = 2,
//     y = 3;
// let s = x ** 4 + 5 * x ** 2 + x ** 3 * y;
// console.log(s);

// Integer18
// let x = 2,
//     y = 3;
// let s = 6 * x ** 3 * y ** 5 + 4 * x ** 4 * y ** 3 - 24 * x * y;
// console.log(s);

// Integer19
// let a = 241;
// let n1, n2, n3;
// n3 = a % 10;
// n2 = ((a - n3) / 10) % 10;
// n1 = (a - (n2 * 10 + n3)) / 100;
// console.log(n1 + n2 + n3, n1 * n2 * n3);

// Integer20
console.log(Math.abs((1 + 2 / 3) - (3 + 1 / 4)));
