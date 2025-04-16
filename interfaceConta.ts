 export interface IntConta{ 
    saldo: number;

    deposito(valorDepositar: number):void;
    saque(valorSacar: number):void;
    transferencia(valorTrasferir: number, cliente2: IntConta):void;
    verificarsaldo():void;
}
  
  