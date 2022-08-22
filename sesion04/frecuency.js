function frequency(string) {
    // Code goes here
    let LetrasEncontradas = []
    let result = {}
    let resultOrd = {}
    let keys

    for (let i = 0; i < string.length; i++) {
        let buscar = false
        let coincidencia = false
        for (let j = 0; j < LetrasEncontradas.length; j++) {
            if (string[i] == LetrasEncontradas[j]) {
                coincidencia = true
            }

        }
        if (!coincidencia) {
            buscar = true
        }

        if (buscar) {
            let count = 0
            for (let k = 0; k < string.length; k++) {
                if (string[i] == string[k]) {
                    count++
                }

            }

            result[string[i]] = count



        }


    }
    console.log('orden')

    keys = Object.keys(result)
    keys.sort()

    for (let l = 0; l < keys.length; l++) {

        for (let propiedad in result) {
            if (propiedad==keys[l]) {
                
                resultOrd[keys[l]]=result[propiedad]
            }
            

        }
    }



        console.log('===finished')
        return resultOrd

    }

    console.log('Test 1:', frequency('cccbbbaaa'))
    // {a: 3, b: 3, c: 3}
    console.log('Test 2:', frequency('www.bedu.org'))
    // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
    console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}