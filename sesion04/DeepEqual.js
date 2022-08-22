//Ejercicio de postwork Reto01


function deepEqual(a, b) {
    // Code goes here
    if (typeof(a)===typeof(b)){
        let Keys01=[];
        let Keys02=[];
        if (Array.isArray(a)&&Array.isArray(b)){
        
            for (let i = 0;  i < a.length; i++) {
                if (a[i]===b[i]){
        
                }else{
                    return false
                }
           
            }
            return true
        }
        if (typeof(a)!='object' && typeof(b)!='object'){
        
            return true
        }
        else{
            Keys01 = Object.keys(a)
            Keys02=Object.keys(b)
        

            if(deepEqual(Keys01,Keys02)){
        

                return true
            }
            else{
        
                return false
            }
            

        }
    }
    else{
        
        return false
        

    }
    
   }
   
   const john = {
    firstName: 'John',
    lastName: 'Doe'
   }
   
   console.log('Test 1:', deepEqual(1, 1)) // true
   console.log('=========')
   console.log('Test 2:', deepEqual(1, '1')) // false
   console.log('=========')
   console.log('Test 3:', deepEqual(john, john)) // true
   console.log('=========')
   console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
   console.log('=========')
   console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false