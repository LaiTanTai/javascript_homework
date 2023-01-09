document.getElementById("bai1").onclick = function(){
    document.getElementById("b1").style.display = "block";
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none"; 
    document.getElementById("calc1").onclick = function(){
        document.getElementById("result1").innerHTML = "Số chẵn là : "
        for(let i = 0 ; i < 100;i++){
            if(i%2===0){
                document.getElementById("result1").innerHTML+= i + " "
            }
        } 
        document.getElementById("result1").innerHTML += "<br> Số lẻ là : "
        for(let i = 0 ; i < 100 ;i++){
            if(i%2 != 0){
                document.getElementById("result1").innerHTML+= i + " "
            }
        }
    }
}
document.getElementById("bai2").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "block"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none";    
    document.getElementById("calc2").onclick = function(){
       let p = 0; 
       let count = 0;
       while(p < 1000){
            if(p%3==0){
                count++;
            }
            p++;
       }
       document.getElementById("result2").innerHTML = " Số chia hết cho 3 nhỏ hơn 1000 : " + count;
    }
}
document.getElementById("bai3").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "block"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none"   
    document.getElementById("calc3").onclick = function(){
        let n1 = 0
        let num = 0;
        for(let i = 0 ; i < 10000 ;i++){
            n1 += i;
            if(n1 > 10000){
                num = i;
                break;
            }
        }
        document.getElementById("result3").innerHTML = "Số nguyên dương nhỏ nhất : " + num ;
    } 
}   
document.getElementById("bai4").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "block"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none";
    document.getElementById("calc4").onclick = function(){
        let x = +document.getElementById("x").value
        let n2 = +document.getElementById("n2").value
        let sum = 0 ;
        for(let i = 1 ; i <= n2 ;i++){
            sum = sum + x**i;
        }
        document.getElementById("result4").innerHTML = "Tổng : " + sum
    }
}
document.getElementById("bai5").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "block"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none";
    document.getElementById("calc5").onclick = function(){
        let n3 = +document.getElementById("n3").value;
        let gt = 1;
        for(let i = 1 ; i <= n3 ; i++ ){
            gt *= i;
        }
        document.getElementById("result5").innerHTML = "Giai thừa : " + gt
    }
    document.getElementById("calc5-2").onclick = function(){
        let day = +document.getElementById("day").value
        let month = +document.getElementById("month").value
        let year = +document.getElementById("year").value
        if((day > 31||day < 1)){
            alert("Ngày nhất định phải lớn hơn 0 và nhỏ hơn 32")
        }else if(month > 12 || month < 1){
            alert("Tháng phải lớn hơn 0 và nhỏ hơn 13")
        }else if(year<1920){
            alert("năm phải lớn hơn 1920")
        }
        if(day == 29){
            if(month == 2){
                month++;
                day = 1;
            }else{
                day++
            }
        }else if(day == 30){
            if(month == 4){
                day = 1;
                month++
            }else if(month == 6){
                day = 1;
                month++
            }else if(month == 9){
                day = 1;
                month++
            }else if(month == 11){
                day = 1;
                month++
            }
        }else if(day == 31){
            if(month == 1){
                day = 1;
                month++
            }else if(month == 3){
                day = 1;
                month++
            }else if(month == 5){
                day = 1;
                month++
            }else if(month == 7){
                day = 1;
                month++
            }else if(month == 8){
                day = 1;
                month++
            }else if(month == 10){
                day = 1;
                month++
            }else if(month == 12){
                day = 1;
                year++;
                month =1 ;
            }
        }
        document.getElementById('result5').innerHTML = day+"/"+month+"/"+year
    }
}
document.getElementById("bai6").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "block"
    document.getElementById("b7").style.display = "none";
    document.getElementById("calc6").onclick =function() {
        for(let i = 1 ; i <= 10 ; i++){
            if(i%2==0){
                document.getElementById("result6").innerHTML += '<div style="background-color : red ; color: white">Div chẵn</div>'
            }else{
                document.getElementById("result6").innerHTML += '<div style="background-color : blue ; color : white">Div lẻ</div>'
            }
        }
    }
}
document.getElementById("bai7").onclick = function(){
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "block"
    document.getElementById("calc7").onclick = function(){
        document.getElementById("result7").innerHTML = " "
        let n4 = document.getElementById("n4").value;
        let k = true;
        for(let i = 2 ; i <= n4 ; i++){
            for(let j = 2 ; j < i ;j++){
                if(i%j == 0){
                    k = false;
                }
            }
            if(k == true){
                document.getElementById("result7").innerHTML += i + " ";
            }
            k = true ;
        }
    }
}
