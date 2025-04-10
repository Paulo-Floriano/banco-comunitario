
  import { IntCliente } from "./interfaceCliente";
  
  export class Cliente implements IntCliente {
    constructor(
      public id: number,
      public nome: string,
      public endereco: string,
      public telefone: string,
      public renda: number
    ) {}
  }