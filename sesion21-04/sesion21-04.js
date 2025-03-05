let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let c = +prompt("Nhập số c");
let X;
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Phương trình vô số nghiệm");
        } else {
            console.log("Phương trinh Vo Nghiệm");
        }
    } else {
        X = -c / b;
        console.log("Có 1 nghiệm X = " + X);
    }
} else {
    let delta = b * b - (4 * a * c);
    if (delta < 0) {
        console.log("Phương trình Vô Nghiệm");
    } else if (delta === 0) {
        X = -b / (2 * a);
        console.log("Phương trình có nghiệm kép X1, X2 = " + X);
    } else {
        let X1 = (-b - Math.sqrt(delta) / (2 * a));
        let X2 = (-b + Math.sqrt(delta) / (2 * a));
        console.log("Phương trình có 2 nghiệm phan biệt X1 = " + X1 + " X2 = " + X2);
    }
}