import { IntConta } from "./interfaceConta";
import { Cliente } from "./Cliente";

export class ContaPoupanca implements IntConta{
  taxaJuros: number;
  cliente: Cliente;
  saldo: number;

  constructor(taxaJuros: number, cliente: Cliente, saldo: number){
      this.taxaJuros = taxaJuros;
      this.cliente = cliente;
      this.saldo = saldo;
  }

  deposito(valorDepositar: number): void {
    if (valorDepositar > 0){
        this.saldo += valorDepositar;
        console.log("Sucesso ao depositar")
    } 
    else{
        console.log("Erro, saldo zero ou negativo");
    }
    
}
saque(valorSacar: number): void {
    if (valorSacar > 0 && this.saldo > valorSacar){
        this.saldo -= valorSacar;
        console.log("Saque efetuado")
    }
    else{
        console.log("Saldo insuficiente ou valor de saque zero")
    }
}
transferencia(valorTrasferir: number, cliente2: IntConta): void {
    if (valorTrasferir < this.saldo){
        this.saldo -= valorTrasferir;
        cliente2.saldo += valorTrasferir;
        console.log("Sucesso ao transferir")
    }
    else{
        console.log("Erro ao Transferir")
    }
}

verificarsaldo():void{
    console.log("Saldo = " + this.saldo)
}

calcularTaxa():void{
    let taxa: number = this.saldo*(this.taxaJuros/100);
    this.saldo += taxa;
    console.log("Taxa / saldo = " + taxa + " / " + this.saldo)
}

}