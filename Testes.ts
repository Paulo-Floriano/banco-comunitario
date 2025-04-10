import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupança";

const cliente1 = new Cliente(1, "Kaique", "Rua santa cruz", "8820-1030", 201);
const cliente2 = new Cliente(2, "Paulo", "Rua amanda grosch", "8850-5652", 200);

const contaCorrente = new ContaCorrente(cliente1);
const contaPoupanca = new ContaPoupanca(cliente2, 0.02);


contaCorrente.depositar(200);
console.log("Saldo CC após depósito:", contaCorrente.verificarSaldo());

contaCorrente.sacar(50);
console.log("Saldo CC após saque:", contaCorrente.verificarSaldo());

contaCorrente.transferir(contaPoupanca, 100);
console.log("Saldo CC após transferência:", contaCorrente.verificarSaldo());
console.log("Saldo CP após recebimento:", contaPoupanca.verificarSaldo());

contaPoupanca.calcularTaxa();
console.log("Saldo CP após juros:", contaPoupanca.verificarSaldo());