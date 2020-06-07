import { Component, OnInit } from '@angular/core';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {

  type : {id, nome} = {id:null, nome: ""};

  constructor(public tipoService: TipoService) { }

  ngOnInit() {
  }

  createType(){
    console.log(this.type);
    this.tipoService.createType(this.type).subscribe(res=>{
      this.type = {id: null, nome: ""};
    });
  }

}
