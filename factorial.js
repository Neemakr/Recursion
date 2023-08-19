function Fact(n){
    if(n==0){
        return 1
    }
    else{
        return result  = n*Fact(n-1)
    }
}
//console.log(Fact(6))
const number = window.prompt('Enter a positive integer: ');
Fact(number);
console.log(result);