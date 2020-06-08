import { Component, OnInit } from '@angular/core';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {

  tipo : {id, nome} = {id:null, nome: ""};

  constructor(public tipoService: TipoService) { }

  ngOnInit() {
  }

  createTipo(){
    console.log(this.tipo);
    this.tipoService.createTipo(this.tipo).subscribe(res=>{
      this.tipo = {id: null, nome: ""};
    });
  }

}
