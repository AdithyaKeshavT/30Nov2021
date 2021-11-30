let username = "JackOfAllTrades";
let userCheck = /^\D[a-z]+\d*$|^\D\d{2}$/i; // Change this line
let result = userCheck.test(username);