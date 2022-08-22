function compact(array) {
    // Code goes here...
    
    return array.filter(function(elem){
        return !!elem
    })
    
  }
  
  const array = [0, 1, false, 2, '', 3];
  const compactedArray = compact(array);
  
  console.log(compactedArray); // [1, 2, 3]