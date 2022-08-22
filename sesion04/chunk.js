
 function chunk(array, size) {
    // Code goes here
    let secondArray=[]
    let auxArray = []
    let count = 0
    
    for (let i = 0; i < array.length; i++) {
        auxArray.push(array[i]);
        count++
        if (count==size){
            count=0
            secondArray.push(auxArray)
            auxArray=[]

        }
        
    }


    return secondArray
  };
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 4)) // [[1, 2, 3], [4, 5, 6], [7, 8]]