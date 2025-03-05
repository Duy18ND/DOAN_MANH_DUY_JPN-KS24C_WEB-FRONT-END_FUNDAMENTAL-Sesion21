let number = +prompt("Nhập số nguyên bất kỳ");
let found = true;
if (!Number.isInteger(number) || number < 2) {
    console.log("Số nguyên không tồn tại")
} else {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            found = false;
            break;
        }
    }

    if (found) {
        console.log(number + " là số nguyên tố");
    } else {
        console.log(number + " Không phải là số nguyên tố");
    }
}