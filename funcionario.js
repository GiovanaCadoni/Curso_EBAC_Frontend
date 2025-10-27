function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz Olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
funcionario1.dizOi();
funcionario1.dizCargo();
