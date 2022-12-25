document.getElementById("bai1").onclick = function(){
    document.getElementById("b1").style.display = "block";
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none";
    document.getElementById("b8").style.display = "none"    
    document.getElementById("calc1").onclick = function(){
        let num_1 = +document.getElementById("num-1").value
        let num_2 = +document.getElementById("num-2").value
        let num_3 = +document.getElementById("num-3").value
        if (num_1 >= num_2){
            let tmp1 = num_1
            num_1 = num_2
            num_2 = tmp1
        }
        if(num_2 >= num_3){
            let tmp2 = num_2
            num_2 = num_3
            num_3 = tmp2
        }
        if (num_1 >= num_2){
            let tmp1 = num_1
            num_1 = num_2
            num_2 = tmp1
        }
        document.getElementById("result1").innerHTML = num_1 + " " + num_2 + " " + num_3
        
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
    document.getElementById("b8").style.display = "none"    
    document.getElementById("calc2").onclick = function(){
        let member = document.getElementById("member").value
        document.getElementById("result2").innerHTML = "Chào " + member
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
    document.getElementById("b8").style.display = "none"    
    document.getElementById("calc3").onclick = function(){
        let n1 = +document.getElementById("STT1").value
        let n2 = +document.getElementById("STT2").value
        let n3 = +document.getElementById("STT3").value
        let odd = 0;
        let even = 0;
        if(n1 % 2 == 0){
            even++;
        }else{
            odd++
        }
        if(n2 % 2 == 0){
            even++;
        }else{
            odd++
        }
        if(n3 % 2 == 0){
            even++;
        }else{
            odd++
        }
        document.getElementById("result3").innerHTML = "Có " + even + " số chẵn và "+ odd +" số lẻ" 
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
    document.getElementById("b8").style.display = "none"    
    document.getElementById("calc4").onclick = function(){
        let c1 = +document.getElementById("c1").value
        let c2 = +document.getElementById("c2").value
        let c3 = +document.getElementById("c3").value
        if((c1 == c2)&&(c1 == c3)){
            document.getElementById("result4").innerHTML = "Tam giác đều"
        }else if((c1 == c2) || (c2 == c3) || (c1 == c3) ){
            document.getElementById("result4").innerHTML = "Tam giác cân "
        }else if((c1^2 == c2^2 + c3^2) ||(c2^2 == c1^2 + c3^2) || (c3^2 == c2^2 + c1^2)){
            document.getElementById("result4").innerHTML = "Tam giác vuông"
        }else{
            document.getElementById("result4").innerHTML = "Tam giác khác"
        }
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
    document.getElementById("b8").style.display = "none"   
    document.getElementById("calc5-1").onclick = function(){
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
        if(day == 1){
            switch(month){
                case 1:
                    day = 31
                    year--
                    month =12
                    break
                case 2:
                    day = 31
                    month--
                    break
                case 3:
                    if(year % 4 == 0 ){
                        day = 29
                        month--
                        break
                    }else{
                        day = 28
                        month--
                    }
                case 4:
                    day = 31
                    month--
                    break
                case 5:
                    day = 30
                    month--
                    break
                case 6:
                    day = 31
                    month--
                    break
                case 7:
                    day = 30
                    month--
                    break
                case 8:
                    day = 31
                    month--
                    break
                case 9:
                    day = 31
                    month--
                    break
                case 10:
                    day = 30
                    month--
                    break
                case 11:
                    day = 31
                    month--
                    break
                case 12:
                    day = 30
                    month--
            }
        }else{
            day--;
        }
        document.getElementById('result5').innerHTML = day+"/"+month+"/"+year
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
    document.getElementById("b8").style.display = "none"  
    document.getElementById("calc6").onclick =function() {
        let month2 = +document.getElementById("month2").value
        let year2 = +document.getElementById("year2").value
        let day2 = 0;
        if(month > 12 || month < 1){
            alert("Tháng phải lớn hơn 0 và nhỏ hơn 13")
        }else if(year<1920){
            alert("năm phải lớn hơn 1920")
        }
        if(year2 % 4==0){
            switch(month2){
                case 1 :
                    day2 = 31
                    break
                case 2 :
                    day2 = 29
                    break
                case 3 :
                    day2 = 31
                    break
                case 4 :
                    day2 = 30
                    break
                case 5 :
                    day2 = 31
                    break
                case 6 :
                    day2 = 30
                    break
                case 7 :
                    day2 = 31
                    break
                case 8 :
                    day2 = 31
                    break
                case 9 :
                    day2 = 31
                    break
                case 10 :
                    day2 = 31
                    break
                case 11 :
                    day2 = 30
                    break
                case 12 :
                    day2 = 31
                    break
            }
        }else{
            switch(month2){
                case 1 :
                    day2 = 31
                    break
                case 2 :
                    day2 = 28
                    break
                case 3 :
                    day2 = 31
                    break
                case 4 :
                    day2 = 30
                    break
                case 5 :
                    day2 = 31
                    break
                case 6 :
                    day2 = 30
                    break
                case 7 :
                    day2 = 31
                    break
                case 8 :
                    day2 = 31
                    break
                case 9 :
                    day2 = 31
                    break
                case 10 :
                    day2 = 31
                    break
                case 11 :
                    day2 = 30
                    break
                case 12 :
                    day2 = 31
                    break
            }        
        }
        document.getElementById("result6").innerHTML ="Có " + day2 +" ngày"
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
    document.getElementById("b8").style.display = "none"
    document.getElementById("calc7").onclick = function(){
        let text = +document.getElementById("int").value
        if (text < 100 || text > 999 ){
            alert("Dữ liệu không hợp lệ")
        }
        let a1 = text % 10
        let text1 = "1"
        switch(a1){
            case 1:
                text1 = "một"
                break
            case 2:
                text1 = "hai"
                break
            case 3:
                text1 = "ba"
                break
            case 4:
                text1 = "bốn"
                break
            case 5:
                text1 = "năm"
                break
            case 6:
                text1 = "sáu"
                break
            case 7:
                text1 = "bảy"
                break
            case 8:
                text1 = "tám"
                break
            case 9:
                text1 = "chín"
                break
            }
        text = text/10
        text = Math.floor(text)
        let a2 = text % 10
        let text2 = "1" 
        switch(a2){
            case 1:
                text2 = "một"
                break
            case 2:
                text2 = "hai"
                break
            case 3:
                text2 = "ba"
                break
            case 4:
                text2 = "bốn"
                break
            case 5:
                text2 = "năm"
                break
            case 6:
                text2 = "sáu"
                break
            case 7:
                text2 = "bảy"
                break
            case 8:
                text2 = "tám"
                break
            case 9:
                text2 = "chín"
                break
        }
        text = text / 10
        text = Math.floor(text,0)
        let a3 = text
        let text3 = ""
        switch(a3){
            case 1:
                text3 = "một"
                break
            case 2:
                text3 = "hai"
                break
            case 3:
                text3 = "ba"
                break
            case 4:
                text3 = "bốn"
                break
            case 5:
                text3 = "năm"
                break
            case 6:
                text3 = "sáu"
                break
            case 7:
                text3 = "bảy"
                break
            case 8:
                text3 = "tám"
                break
            case 9:
                text3 = "chín"
                break
        }
        if(a1 == 0 && a2 == 0){
            document.getElementById("result7").innerHTML = text3 + " trăm "
        }else if(a1 == 0 && a2 != 0){
            document.getElementById("result7").innerHTML = text3 + " trăm " + text2 + " mươi "
        }else if( a1 != 0 && a2 == 0){
            document.getElementById("result7").innerHTML = text3 + " trăm  lẻ " + text1
        }else{
            document.getElementById("result7").innerHTML = text3 + " trăm " + text2 + " mươi " + text1
        }
    }
}
document.getElementById("bai8").onclick = function (){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("b5").style.display = "none"
    document.getElementById("b6").style.display = "none"
    document.getElementById("b7").style.display = "none"
    document.getElementById("b8").style.display = "block"
    document.getElementById("calc8").onclick = function(){
        let x1 = +document.getElementById("x1").value
        let y1 = +document.getElementById("y1").value
        let x2 = +document.getElementById("x2").value
        let y2 = +document.getElementById("y2").value
        let x3 = +document.getElementById("x3").value
        let y3 = +document.getElementById("y3").value
        let x4 = +document.getElementById("x4").value
        let y4 = +document.getElementById("y4").value
        console.log(y4)
        let d1 = (x1-x4)*(x1-x4) + (y1-y4)*(y1-y4)
        d1 = Math.sqrt(d1,2)
        console.log(d1)
        let d2 = (x2-x4)*(x2-x4) + (y2-y4)*(y2-y4)
        d2 = Math.sqrt(d2,2)
        let d3 = (x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)
        d3 = Math.sqrt(d3,2)
        if(d1 > d2 && d1 > d3){
            let name1 = document.getElementById("name1").value
            document.getElementById("result8").innerHTML = name1 + " có quãng đường đi dài nhất"
        }
        if(d2 > d1 && d2 > d3){
            let name2 = document.getElementById("name2").value
            document.getElementById("result8").innerHTML = name2 + " có quãng đường đi dài nhất"
        }
        if(d3 > d1 && d3 > d2){
            let name3 = document.getElementById("name3").value
            document.getElementById("result8").innerHTML = name3 + " có quãng đường đi dài nhất"
        }
    }
}