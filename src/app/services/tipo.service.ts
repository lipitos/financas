import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})

export class TipoService {

  url = "http://api-financas-lptis.herokuapp.com/financas/tipo";


  constructor(private httpClient: HttpClient) { }

  //Método GET
  public getTipos():Observable<any>{
    return this.httpClient.get(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
 }

  //Método POST
  public createTipo(tipo: {id, nome}){
    return this.httpClient.post(this.url, tipo)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //Método DELETE
  public deleteTipo(tipo: {id}){
    return this.httpClient.delete(this.url + '/' + tipo.id)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = 'Código do erro: ${error.status}, menssagem: ${error.message}';
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
