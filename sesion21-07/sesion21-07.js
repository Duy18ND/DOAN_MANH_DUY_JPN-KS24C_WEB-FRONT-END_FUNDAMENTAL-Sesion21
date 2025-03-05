let money = +prompt("Số tiền gửi là:");
let month = +prompt("Số tháng muốn gửi là:");
let result = money * (1 + 0.01) ** month;
console.log("Số tiền lãi nhận được sau " + month + " là: " + result.toFixed(2));
