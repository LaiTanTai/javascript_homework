//Bài 1 : Tính tiền lương nhân viên
console.log("Bài 1:Tính tiền lương nhân viên");
// input : nhập vào một số là số tháng làm việc số tháng 
let a = prompt("Hãy nhập vào số tháng bạn đã làm việc: ")
// tính tiền lương sau a tháng
let Salary = a*100000
//  Output : tiền lương của nhân viên sau a tháng làm 
console.log("Tiền lương sau ", a ," tháng làm việc của bạn là: ",Salary);



// bài 2 : tính giá trị trung bình 
console.log(" Bài 2 : Tính giá trị trung bình :");
// input : nhập vào 5 số thực 
let b = +prompt("Hãy nhập vào số thực thứ 1 bạn muốn tính: ")
let c = +prompt("Hãy nhập vào số thực thứ 2 bạn muốn tính: ")
let d = +prompt("Hãy nhập vào số thực thứ 3 bạn muốn tính: ")
let e = +prompt("Hãy nhập vào số thực thứ 4 bạn muốn tính: ")
let f = +prompt("Hãy nhập vào số thực thứ 5 bạn muốn tính: ")
// Tính trung bình 5 số
let average = b+c
// output : xuất ra giá trị trung bình của 5 số trên 
console.log("Trung bình của 5 số đã nhập là : ",average);




// Bài 3: Quy đổi tiền 
console.log("Bài 3 : Quy đổi tiền ")
// input : nhập vào số đô la mỹ 

let usd = +prompt("Hay nhập vào số đô la mà ban muốn chuyển đổi sang tiền việt : ")

// thuật toán chuyển đổi
let Vnd = usd*23500;
// output: trả ra 1 số là tiền việt nam 
console.log("mệnh giá",usd," USD sau khi chuyển đổi là :", Vnd," VND")





// bài 4 tính diện tích và chu vi hình chữ nhât 
console.log("Bài 4 : Tính diện tích và chu vi hình chữ nhật : ");
// input : nhập vào chiều dài và chiều rộng của hình chữ nhật 
let cd = +prompt(" Hãy nhập vào chiều dài của hình chữ nhật : ")
let cr = +prompt("Hãy nhập vào chiều rộng của hình chữ nhật : ")
// thuật toán 
let S = cd*cr;
let C = (cd+cr)*2;
// output : xuất ra diện tích và chu vi của hình chữ nhật 
console.log("Diện tích của hình chữ nhật là :" , S);
console.log("Chu vi của hình chữ nhật là :" , C);





// Bài 5 : Tính tổng 2 ký số 
console.log("Bài 5 tính tổng 2 ký số của số có hai chữ số :");
// input : nhập vào 1 số có 2 chữ số
let n =+prompt("hãy nhập vào một số có 2 chữ số : ");
// thuật toán 
let sum = 0 ;
let tmp = 0;
tmp = n%10;
sum+=tmp;
n  = n/10;
n = Math.floor(n);
tmp = n%10;
sum+=tmp;
// output : trả về một số là tổng của 2 ký số của số có hai chữ số
console.log("Tổng của hai ký số là :",sum);
