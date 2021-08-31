import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MegaSenaService {

  private URL_NUMBERS_LOCAL = 'http://localhost:8080/megasena/complete-game';
  private URL_NUMBERS = 'https://megasena-1630256128905.azurewebsites.net/megasena/complete-game';

  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  public callMegaSenaLocal(): Observable<any> {
    
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    const options = {headers: headers};
   return this.http.get(this.URL_NUMBERS, options).pipe((res:any)=> res);
  }

}
