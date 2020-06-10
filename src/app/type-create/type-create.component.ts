import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoService } from '../services/tipo.service';
import { Tipo } from '../models/tipo';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {


  //Criação de formulário
  formTipos: FormGroup;

  tipo : {id, nome} = {id:null, nome: ""};

  successMsg = false;

  constructor(
    public tipoService: TipoService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createFormTipos();
  }

  sentData(){
    this.tipo = this.formTipos.value;
    console.log(this.tipo);

    this.tipoService.createTipo(this.tipo).subscribe(res=>{
      this.tipo = {id: null, nome: ""};
    });

    this.successMsg = true;
    
    this.formTipos.reset();

  }

  createFormTipos(){
    this.formTipos = this.formBuilder.group({
      id:[''],
      nome:['',
      Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ]
    });
  }

  createTipo(){
    console.log(this.tipo);
    this.tipoService.createTipo(this.tipo).subscribe(res=>{
      this.tipo = {id: null, nome: ""};
    });
  }

  get nome() {
    return this.formTipos.get('nome');
  }

  get id(){
    return this.formTipos.get('id');
  }
}
