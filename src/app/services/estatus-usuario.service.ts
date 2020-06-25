import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatusUsuarioService {
  private uURL = 'https://o-api-php.herokuapp.com/api3.php';
  constructor(private http: HttpClient) { }

  getEstatus(): Observable<any>{
    return this.http.get<any>(this.uURL);
  }
}
