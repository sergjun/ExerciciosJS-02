


function calcVoto (eleitoresTotal, votosBrancos, votosNulos, votosValidos){

    
    let brancosP
    let nulosP
    let validosP


    nulosP= (votosNulos*100)/eleitoresTotal
    brancosP= (votosBrancos*100)/eleitoresTotal
    validosP= (votosValidos*100)/eleitoresTotal
    
    console.log(`votos brancos são ${brancosP}% de ${eleitoresTotal}`)
    console.log(`votos nulos são ${nulosP}% de ${eleitoresTotal}`)
    console.log(`votos validos são ${validosP} de ${eleitoresTotal}`)

}




calcVoto(500, 200, 100, 200)



// 3000 - 100
// 300  -  x  = 10%


