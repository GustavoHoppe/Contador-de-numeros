function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pulo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.lenght == 0) {
        window.alert ('ERRO! Confira os dados e tente novamente.')
        res.innerHTML = 'Impossível contar ...'
    } else {
        res.innerHTML = 'Contando : <br>'
        let i = Number (inicio.value)
        let f = Number ( fim.value)
        let p = Number ( pulo.value)

        if (p <= 0) {
            window.alert ('ERRO! Numero de pulo inválido! Considerando pulo = 1')
            p = 1
        }
        
        if (i < f) {
            for (let c= i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F4A3}`
            }
            res.innerHTML += `\u{1F4A5}`
            
        } 
        
        if (i > f) {
            for (let c= i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F4A3}`
            }
            res.innerHTML += `\u{1F4A5}`
        }

        
    }
}
    
    
