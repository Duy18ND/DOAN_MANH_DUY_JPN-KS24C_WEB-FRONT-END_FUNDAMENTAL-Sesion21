let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhấp số thứ " + (i + 1));
    if (Number.isInteger(number) && number % 2 == 0) {
        evenCount = evenCount + 1;
    } else {
        oddCount = + oddCount + 1;
    }
}
console.log(`
    Tổng số chẵn là: ${evenCount}
    Tổng số lẻ là: ${oddCount}
    `);