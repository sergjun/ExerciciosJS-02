const idade = { nome: "Sergio", anos: 28, meses: 7, dias: 200}
const ano = 365
const mes = 30



function calcIdade (){

    // console.log(idade.nome, idade.anos, idade.meses, idade.dias)
    let mesesDias = idade.meses * mes
    let anosDias = idade.anos * ano
    let idadeDias = mesesDias + anosDias + idade.dias
    
    return `${idade.nome} sua idade em dias é ${idadeDias}`

    
    
}

console.log(calcIdade ())