// CHECKPOINT3 --------P3 P4 P5 P6------- //
//RAFAEL VILELA BALBINO

const { listaDeAlunos } = require('./aluno');
let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'CTD-TN2',
    notaDeAprovacao: 6,
    faltasMaximas: 3,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Leandro Almeida', 3,[8,2,8], this.calcularMedia,this.faltas)
            this.listaEstudantes.push(novoAluno)
    }, 
    aprovacaoAluno: function(aluno){
        if(aluno.calcularMedia() >= curso.notaDeAprovacao && aluno.quatidadeDeFaltas < curso.faltasMaximas){
            return true;
        } else if (aluno.calcularMedia() >= (curso.notaDeAprovacao * 0.1) && aluno.quatidadeDeFaltas == curso.faltasMaximas){
            return true;
        } else { 
            return false;
        }
        
    },
    listaAprovados: function () {
        let listaDeAlunos = []
        for (let aluno of this.listaEstudantes) {
            if (this.aprovacaoAluno(aluno) == true) {
                listaDeAlunos.push (true)
            }
            else {
                listaDeAlunos.push (false)
            }
        }
        return listaDeAlunos
                }
}
curso.addAluno();

//------------------------------------------------------------------------------------------------//

//CONSOLES DE APRESNETAÇÃO DE DADOS//

// console.log(alunos.listaDeAlunos[1])
// console.log(alunos.listaDeAlunos[1].calcularMedia())
// console.log(alunos.listaDeAlunos[1].quatidadeDeFaltas)
// curso.aprovacaoAluno(1)

//------------------------------------------------------------------------------------------------//




console.log(curso.listaAprovados()) 
