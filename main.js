
function pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " olá mundo ")
    }
}

function funcionario(nome,cargo,salario){
    this.cargo = cargo;
    this.salario = salario;

    pessoa.call(this, nome)
}

function chefe(nome,cargo,empresa,idade){
    this.cargo = cargo;
    this.empresa = empresa;
    this.idade = idade;

    pessoa.call(this, nome);

    
}


const Pessoa1 = new pessoa('Paula')
const Funcionario1 = new funcionario('paula','professora',5000)
const Chefe1 = new chefe('felipe','empresario','kill',56)
Pessoa1.dizOi();


console.log(Pessoa1);
console.log(Funcionario1);
console.log(Chefe1);

















