// const idade = { nome: "Sergio", anos: 28, meses: 7, dias: 200}
const ano = 365
const mes = 30



function calcIdade (nome="", anos=0, meses=0, dias=0){

    // console.log(idade.nome, idade.anos, idade.meses, idade.dias)
    let mesesDias = meses * mes
    let anosDias = anos * ano
    let idadeDias = mesesDias + anosDias + dias
    
    return `${nome} sua idade em dias é ${idadeDias}`

    
    
}

console.log(calcIdade ("Lika",27 , 10 ,400 ))