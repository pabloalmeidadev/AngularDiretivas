import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.scss']
})
export class CompAtributosComponent {
  estilo:string = "enable"
  corFundo:string = "blue"
  corDaFonte:string = "yellow"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

  constructor(){}

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {

  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}
