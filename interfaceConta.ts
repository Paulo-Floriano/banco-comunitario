import { Cliente } from "./Cliente";
  
  export interface IntConta {
    cliente: Cliente;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(contaDestino: IntConta, valor: number): boolean;
    verificarSaldo(): number;
  }
  
 
  
  