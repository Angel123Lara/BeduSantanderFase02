function flatten(arrays) {
     return arrays.reduce( function (arrayFlaten, elem) {
        console.log('este es el primer elemento', arrayFlaten)
        console.log('este es el segundo elemento',elem)
        console.log('====') 
        return arrayFlaten.concat(elem)
     }, [])
 }
  
  const arrays = [[1, 2, 3], [4, 5], [6]];
  const array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]