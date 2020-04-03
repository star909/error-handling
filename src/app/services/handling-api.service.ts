import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 
export class HandlingApiService {

  dataUrl = "https://api.github.com";
  
  constructor(private http:HttpClient) { }
 /**
   * @ function : getAPIData()
   * @ Purpose  : Creating Http request to get json data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */

   public getAPIData():Observable<any>{
    return this.http
    .get(this.dataUrl)
    .pipe(retry(1),catchError(this.errorHandler))
   }

   /**
   * @ function : errorHandler()
   * @ Purpose  : Handling error message
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  public errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
