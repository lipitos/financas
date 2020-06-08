import { Component, OnInit, Type } from '@angular/core';
import { TipoService } from '../services/tipo.service';
import { Tipo } from '../models/tipo';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  tipos;
  selectedTipo;

  tipo : {id, name} = {id:null, name: ""};

  constructor(public tipoService: TipoService) { }

  ngOnInit() {
    this.tipoService.getTipos().subscribe(res=> {
      this.tipos = res;
    })
  }

  public selectTipo(tipo){
    this.selectedTipo = tipo;
  }

  // Chama o serviço para obtém todos os tipos
  getTipos() {
    this.tipoService.getTipos().subscribe(res=> {
      this.tipos = res;
    });
  }

  // deleta um carro
  deleteTipo(tipo) {
    this.tipoService.deleteTipo(tipo).subscribe(() => {
      this.getTipos();
    });
  }

}
