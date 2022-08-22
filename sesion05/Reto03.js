function findMissingNumbers(numbers){
    let ArrayNumbersmiss=[];

    function NotValid(){
        
            return 'Lista no valida'
    }

    numbers.sort(function(a, b){return a - b})
    console.log(numbers)
    let count = numbers[0]
    console.log(count)
    for (let i = 0; i < numbers.length; i++) {
        while (count != numbers[i]){
            ArrayNumbersmiss.push(count)
            
            count++
        }
        count++


    }
        
    return ArrayNumbersmiss


}






console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10, 15])); // [4, 6, 8]