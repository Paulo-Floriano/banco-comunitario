// classes/ContaCorrente.ts
import { IntConta } from "./interfaceConta";
import { IntCliente } from "./interfaceCliente";

export class ContaCorrente implements IntConta {
  saldo: number = 0;
  private limiteChequeEspecial: number = 100;

  constructor(public cliente: IntCliente) {
    if (cliente.renda < 500) {
      throw new Error("Renda insuficiente para abrir conta corrente.");
    }
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  transferir(contaDestino: IntConta, valor: number): boolean {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
      return true;
    }
    return false;
  }

  verificarSaldo(): number {
    return this.saldo;
  }
}

