import { IntConta } from "./interfaceConta";
import { Cliente } from "./Cliente";

export class ContaCorrente implements IntConta{
  cliente: Cliente;
  saldo: number;
  chequeEspecial: number = 100;

  constructor(cliente: Cliente, saldo: number){
      this.cliente = cliente;
      this.saldo = saldo;
  }
  
  

  deposito(valorDepositar: number): void {
      if (valorDepositar > 0){
          this.saldo += valorDepositar;
      } 
      else{
          console.log("Erro, saldo zero ou negativo");
      }
      
  }
  saque(valorSacar: number): void {
      if (valorSacar > 0 && this.saldo > valorSacar){
          this.saldo -= valorSacar;
          console.log("Sucesso ao sacar")
      }
      else{
          console.log("Saldo insuficiente ou valor de saque zero ou negativo")
      }
  }
  transferencia(valorTrasferir: number, cliente2: IntConta): void {
      if (valorTrasferir < this.saldo){
          this.saldo -= valorTrasferir;
          cliente2.saldo += valorTrasferir;
      }
      else{
          console.log("Erro ao transferir")
      }
  }

  verificarsaldo():void{
      console.log("Saldo = " + this.saldo)
  }

  sacarChequeEspecial(valor:number){
      if (this.saldo == 0){
          if (valor <= this.chequeEspecial){
              this.chequeEspecial -= valor;
              this.saldo += valor;
              console.log("Sucesso ao sacar o cheque")
          }
          else{
              console.log("Valor muito alto")
          }
      }
      else{
          console.log("A conta ainda tem saldo")
      }
  }
}