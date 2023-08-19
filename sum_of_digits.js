function Sum(n){
    if(n==0){
        return 0
    }
    else
    return (n%10 + Sum(parseInt(n/10)))
}
console.log(Sum(79));