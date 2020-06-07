import { Component, OnInit } from '@angular/core';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types;
  selectedType;

  tipo : {id, name} = {id:null, name: ""};

  constructor(public tipoService: TipoService) { }

  ngOnInit() {
    this.tipoService.getTypes().subscribe(res=> {
      this.types = res;
    })
  }

  public selectType(type){
    this.selectedType = type;
  }
}
