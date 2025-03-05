let result = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập số nguyên " + (i + 1));
    if (Number.isInteger(number)) {
        if (number % 2 != 0) {
            result += number;
        }
    } else {
        console.log("Số number không hợp lệ!!!" + (i + 1));
    }
}
console.log("Kết quả là: " + result);   
