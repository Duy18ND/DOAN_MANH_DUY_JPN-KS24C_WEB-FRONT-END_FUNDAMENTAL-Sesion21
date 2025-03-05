let number = +prompt("nhập số nguyên từ 1-100");
if (number > 0 && number < 100) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log("Số " + number + " không chia cho cả 3 và 5");
    }
} else {
    console.log("Số nguyên bạn nhập vào không hợp lệ");
}
