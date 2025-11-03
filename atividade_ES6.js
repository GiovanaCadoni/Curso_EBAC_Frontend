const alunosQuePassaram = ['Mariana', 'Elena', 'Thiago', 'Felipe'];
const alunosQueNaoPassaram = ['Maria', 'Sara', 'José'];

const alunos = alunosQuePassaram.map(function(positivo) {
    positivo = {
        nome: positivo,
        notas: '7'
    }
    return positivo;
})

const alunos2 = alunosQueNaoPassaram.map(function(negativo) {
    negativo = {
        nome: negativo,
        notas: '5'
    }
    return negativo;
})

const passaram = alunos.every(function(item) {
    return item.notas >= '6'
})

const alunosPositivos = alunos.filter(function(item) {
    return item.notas >= '6'
})

console.log(alunos)
console.log(alunos2)
console.log(passaram)
console.log(alunosPositivos)