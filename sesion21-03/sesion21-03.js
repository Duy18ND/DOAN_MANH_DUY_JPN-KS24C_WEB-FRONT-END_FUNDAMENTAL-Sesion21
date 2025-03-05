let pass = "linh123";
let found = false;
do {
    let anwer = prompt("Mời bạn nhập pass");
    if (anwer === pass) {
        console.log("Welcome");
        found = true;
    } else {
        console.log("Mật khẩu không chính xác");
    }
} while (found === false)