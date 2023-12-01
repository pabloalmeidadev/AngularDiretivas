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

  constructor(){}

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
