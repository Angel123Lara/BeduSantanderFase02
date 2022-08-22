function fibonacciSequence(limit){
    let beforeNum=0
    let afterNum=1
    let sumaNum=1
    console.log(0)
    
    while (sumaNum<=limit) {
       console.log(sumaNum)
       sumaNum=beforeNum+afterNum
       beforeNum=afterNum
       afterNum=sumaNum

    

    }
    console.log('finished')
   
}


fibonacciSequence(2)
fibonacciSequence(1000000)
