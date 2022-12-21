document.getElementById("calculate1").onclick = function(){
    let day = document.getElementById("day").value
    let salary = document.getElementById("salary").value
    let totalSalary = day*salary
    document.getElementById("result-wrapper").style.display = "block"
    document.getElementById("result").innerHTML = totalSalary
}
document.getElementById("calculate2").onclick = function(){
    let num_1 = +document.getElementById("num_1").value
    console.log(num_1)
    let num_2 = +document.getElementById("num_2").value
    let num_3 = +document.getElementById("num_3").value
    let num_4 = +document.getElementById("num_4").value
    let num_5 = +document.getElementById("num_5").value
    let average = (num_1+num_2+num_3+num_4+num_5)/5
    console.log(average)
    document.getElementById("result-wrapper2").style.display = "block"
    document.getElementById("result2").innerHTML = average
}
document.getElementById("calculate3").onclick = function(){
    let USD = document.getElementById("USD").value
    let VND= USD*23500
    document.getElementById("result-wrapper3").style.display = "block"
    document.getElementById("result3").innerHTML = VND
}
document.getElementById("calculate4").onclick = function(){
    let CD = +document.getElementById("CD").value
    let CR = +document.getElementById("CR").value
    let C = (CD+CR)*2
    let S = CD*CR
    document.getElementById("result-wrapper4").style.display = "block"
    document.getElementById("result4").innerHTML = C;
    document.getElementById("result5").innerHTML = S;
}
document.getElementById("calculate5").onclick = function(){
    let n = +document.getElementById("number").value
    let a = n%10;
    let total = 0;
    total+=a;
    n = n / 10
    n = Math.floor(n);
    a = n%10;
    total += a;
    document.getElementById("result-wrapper5").style.display = "block"
    document.getElementById("result6").innerHTML = total
}