import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InvestimentoService {


  constructor(private httpClient: HttpClient) { }

  //Método GET
  public getInvestiments():Observable<any>{
    return this.httpClient.get("http://api-financas-lptis.herokuapp.com/financas/investimentos");
  }

  //Método POST
  public createInvestiment(investiment: {id, codigo, qtd, tipo, valor}){
    return this.httpClient.post("http://api-financas-lptis.herokuapp.com/financas/investimentos", investiment);
  }

  //Método DELETE
  /*public deleteInvestiment(investiment: {id}){
    return this.httpClient.delete("http://api-financas-lptis.herokuapp.com/financas/investimentos/{id}", investiment);
  }*/
}
