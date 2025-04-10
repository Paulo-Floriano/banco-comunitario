import { IntConta } from "./interfaceConta";
import { IntCliente } from "./interfaceCliente";

export class ContaPoupanca implements IntConta {
  saldo: number = 0;
  taxaJuros: number;

  constructor(public cliente: IntCliente, taxaJuros: number) {
    this.taxaJuros = taxaJuros;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo) {
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

  calcularTaxa(): void {
    this.saldo += this.saldo * this.taxaJuros;
  }
}