function power (base, exponent){
    let result = base
    for (let i = 1; i < exponent; i++) {
    result = result*base
 }
 return result
}


console.log(power(2,5))