import { IntCliente } from "./interfaceCliente";
  
  export class Cliente implements IntCliente {
    
       id: number
       nome: string
       endereco: string
       telefone: string
       renda: number

       constructor(nome: string, id: number, endereco: string, telefone: string, renda: number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.renda = renda;
    }
    
     
  }


    