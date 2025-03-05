let number = +prompt("Nhập số nguyên bất kỳ:");
let tax = 2;
while (number > 0) {
    let found = true;
    for (let i = 2; i <= Math.sqrt(tax); i++) {
        if (tax % i === 0) {
            found = false;
            break;
        }
    }
    if (found) {
        console.log(tax);
        number--;
    }
    tax++;
}