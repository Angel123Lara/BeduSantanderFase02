
function createPhoneNumber(numbers){
    let ArrayNumbers='';
    function NotValid(){
        
            return 'Lista no valida'
    }

    if (numbers.length==10) {
      ;
    }
    else{
        return NotValid()
        
    }
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i]>=0 && numbers[i]<=9) {    
            if(i==0){
                ArrayNumbers=ArrayNumbers+'(';
                
            }
            if (i==3) {
                ArrayNumbers=ArrayNumbers+ ') '
                
            } 
            if (i==6) {
                ArrayNumbers=ArrayNumbers+ '-'
                
            }
            let b = numbers[i].toString()             
            ArrayNumbers=ArrayNumbers+b;  
            
        }
        else{
            
            return NotValid() 
            
        }
        
    }
    console.log('bk100')
    return ArrayNumbers


}




console.log(createPhoneNumber([1, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
