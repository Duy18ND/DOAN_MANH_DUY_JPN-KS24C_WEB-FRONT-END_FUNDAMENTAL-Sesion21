let number = +prompt("Nhập số nguyên bất kỳ");
for (let i = 0; i < number; i++) {
    if (number % i == 0) {
        let result = i;
        console.log(result);
    }
}