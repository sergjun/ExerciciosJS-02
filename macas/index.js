
function compras (quantidade) {

    let preco1 = 1.30
    let preco2 = 1
    let precoFinal =0

   
    if (quantidade != Number){
        console.log(`por favor digite um número`)
    }
   
    if (quantidade == 1) {
        precoFinal = preco1
    }

    if (quantidade < 12) {
        precoFinal = quantidade*preco1
        console.log(`voce comprou ${quantidade} maçãs e o custo total é ${precoFinal}`)
    } if (quantidade >=12 ) {
        precoFinal = quantidade*preco2
        console.log(`voce comprou ${quantidade} maçãs e o custo total é ${precoFinal}`)

    }

    
}


compras("10")