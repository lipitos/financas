import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipoService {


  constructor(private httpClient: HttpClient) { }

  //Método GET
  public getTypes():Observable<any>{
    return this.httpClient.get("http://api-financas-lptis.herokuapp.com/financas/tipo");
 }

  //Método POST
  public createType(type: {id, nome}){
    return this.httpClient.post("http://api-financas-lptis.herokuapp.com/financas/tipo", type);
  }

  //Método DELETE
  /*public deleteInvestiment(investiment: {id}){
    return this.httpClient.delete("http://api-financas-lptis.herokuapp.com/financas/investimentos/{id}", investiment);
  }*/
}
