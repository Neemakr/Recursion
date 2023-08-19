function Decnum(n){
    if(n>0){
        console.log(n)
        Decnum(n-1)
    }
}
Decnum(7)