class Conta{
    private numero:int;
    private dono:string;
    private saldo:string;
    
    constructor(numero:int, dono:string, saldo:string){
        this.numero = numero;
        this.dono = dono;
        this.saldo= saldo;
    }

    public getNumero():int{
        return this.numero;
    }

    public setNumero(numero:int):void{
        this.numero = numero;
    }

    public getDono():string{
        return this.dono;
    }

    public setDono(dono:string):void{
        this.dono = dono;
    }

    public getSaldo():string{
        return this.saldo;
    }

    public setSaldo(saldo:string):void{
        this.saldo = saldo;
    }

    changeSaldo(newSaldo:String)
        this.saldo= newSaldo;
    }
class Funcionario{
    private nome:string;
    private cpf:string;
    private salario:double;

    constructor(nome:string, cpf:string, salario:double){
        this.nome = nome;
        this.cpf = cpf;
        this.salario= salario;
    }

public getNome():string{
    return this.nome;
}

public setNome(nome:string):void{
    this.nome = nome;
}

public getCpf():string{
    return this.cpf;
}

public setCpf(cpf:string):void{
    this.cpf = cpf;
}

public getSalario():double{
    return this.salario;
}

public setSalario(salario:double):void{
    this.salario = salario;
}

changeSalario(newSalario:double)
    this.salario= newSalario;
}


class Gerente extends Funcionario {
    private senha:int;
    private numeroDeFuncionariosGerenciados:int;
    private numeroDeAtedimentoAoCliente:int;

    constructor(nome:string, cpf:string, salario:double, senha:int, numeroDeFuncionariosGerenciados:int,numeroDeAtedimentoAoCliente:int){
    super(nome, cpf, salario):
    this.senha = senha;
    this.numeroDeFuncionariosGerenciados = breenumeroDeFuncionariosGerenciados;
    this.numeroDeAtedimentoAoCliente = numeroDeAtedimentoAoCliente;
}
    getSenha(){
        return this.senha;
    }

    setSenha(senha:int){
        this.senha = senha;
    }

    getNumeroDeFuncionariosGerenciados(){
        return this.numeroDeFuncionariosGerenciados;
    }

    setNumeroDeFuncionariosGerenciados(numeroDeFuncionariosGerenciados:int){
        this.numeroDeFuncionariosGerenciados = numeroDeFuncionariosGerenciados;
    }

    getNumeroDeAtedimentoAoCliente(){
        return this.numeroDeAtedimentoAoCliente;
    }

    setNumeroDeAtedimentoAoCliente(numeroDeAtedimentoAoCliente:int){
        this.numeroDeAtedimentoAoCliente = numeroDeAtedimentoAoCliente;
    }

    public walk(): void {
        console.log("Gerente e funcionario");
    }
}

const gerente = new Gerente('PAULA', '057.426.042-03', 2000, 20222705 ,10, 80);

gerente.walk(); 