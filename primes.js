function warning(){
    document.getElementById("data").innerHTML = "Invalid input, please try again."
}

function validate(a, b){
    if(a > b){
        return false;
    }
    if((a < 2) || (a > 100)){
        return false;
    }
    if((b < 2) || (b > 100)){
        return false;
    }
    return true;
}

function isPrime(num){
    if (num == 2){
        return true;
    }
    var sq = Math.sqrt(num)+1;
    for(var i = 2; i < sq; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}


function printPrimes(){
    var numbers = document.getElementById("numbers1");
    num1 = numbers[0].value
    numbers = document.getElementById("numbers2");
    num2 = numbers[0].value
    num1 = Number(num1)
    num2 = Number(num2)
    console.log("num1: ")
    console.log(num1)
    console.log("num2: ")
    console.log(num2)
    if(!validate(num1, num2)){
        warning();
        return;
    }
    var str = ''
    var count = 0
    for(var i = num1; i <= num2; i++){
        if(isPrime(i)){
            if (count == 0){
                str += '';
            }else{
                str += ','
            }
            str += i.toString();
            count++;
        }
    }
    var str1 = "There are " + count.toString() + " prime numbers."
    document.getElementById("prime_num").innerHTML = str1
    if(count != 0)
        document.getElementById("data").innerHTML = str
}