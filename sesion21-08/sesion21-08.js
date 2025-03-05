for (let number = 100; number <= 999; number++) {
    let result = 0;
    let a = Math.floor(number / 100);
    let b = Math.floor((number % 100) / 10);
    let c = Math.floor(number % 10);
    result = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    if (number === result) {
        console.log(number);
    }
}