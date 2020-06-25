import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  private uURL = 'https://o-api-php.herokuapp.com/api2.php';
  constructor(private http: HttpClient) { }

  getTipo(): Observable<any>{
    return this.http.get<any>(this.uURL);
  }
}
