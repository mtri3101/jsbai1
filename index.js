// Bài tập 1: Tính tiền lương
// Mô hình 3 khối:
// Input: Lương 1 ngày, số ngày làm
// Output: Tổng lương
// Process: tính lương = Lương 1 ngày * số ngày làm
var salaryPerDay = 100000;
var workingDays = 20;
var totalSalary = salaryPerDay * workingDays;
console.log('Tổng lương 20 ngày làm là:',totalSalary)


// Bài tập 2: Tính giá trị trung bình 
// Input: number1, number2, number3, number4, number5
// output: giá trị trung bình
// process: giá trị trung bình = tổng 5 số / 5
var number1 = 15;
var number2 = 21;
var number3 = 24;
var number4 = 33;
var number5 = 45;
var averageNumber = (number1 + number2 + number3 + number4 + number5) / 5
console.log('Giá trị trung bình là:',averageNumber);


// Bài tập 3: Quy đổi tiền
// input: giá usd, số tiền nhập vào
// output: tiền quy đổi
// process: tiền quy đổi = giá usd * số tiền nhập vào
var dollarPrice = 23500;
var dollar = 500;
var dollarToVnd = dollar * dollarPrice
console.log('Số tiền quy đổi sang vnd là:',dollarToVnd)


// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
// input: chiều dài, chiều rộng
// output: diện tích, chu vi
// process: chu vi = (chiều dài + chiều rộng) *2
//          diện tích = chiều dài * chiều rộng
var length = 100;
var width = 40;
var area = length * width;
var perimeter = (length + width)*2;
console.log('Diện tích là:', area);
console.log('Chu vi là:',perimeter);


// Bài tập 5: Tính tổng 2 ký số
// input: số 2 chữ số
// output: tổng 2 ký số
// process: số hàng đơn vị = số 2 chữ số % 10
//          số hàng chục = mathfloor(số 2 chữ số / 10)
//          tổng 2 ký số = số hàng đơn vị + số hàng chục
var inputNumber = 63;
var tensNumber = Math.floor(inputNumber/10);
var unitNumber = inputNumber % 10;
var total = tensNumber + unitNumber;
console.log('Tổng 2 ký số là:',total)

