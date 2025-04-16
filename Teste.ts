import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { Cliente } from "./Cliente";

let paulo = new Cliente("Paulo", 1, "stettin", "99999999", 1000)
let lucas = new Cliente("Lucas", 2, "Progresso", "88888888", 3000)
let kaique = new Cliente("Kaique", 3, "Alamedas", "77777777", 400)

let lucasPoupanca = new ContaPoupanca(2, lucas, 1000)
let KaiquePoupanca = new ContaPoupanca(2, kaique, 300)
let pauloPoupanca = new ContaPoupanca(2, paulo, 4000)

if (kaique.renda >= 500){
    let kaiqueCorrente = new ContaCorrente(kaique, 760)
}
else{
    console.log("Erro, renda insuficiente")
}

if (paulo.renda >= 500){
    console.log("Sucesso ao cadastrar a conta paulo na conta corrente")
    let pauloCorrente = new ContaCorrente(paulo, 760);
    lucasPoupanca.transferencia(20000, pauloCorrente);
    pauloCorrente.sacarChequeEspecial(80)
}
else{
    console.log("Erro, renda insuficiente")
}

KaiquePoupanca.deposito(9000);
KaiquePoupanca.transferencia(4000, lucasPoupanca)

lucasPoupanca.saque(2000)
lucasPoupanca.calcularTaxa()
lucasPoupanca.verificarsaldo()