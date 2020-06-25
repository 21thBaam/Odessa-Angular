import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AdminUser } from '../data-interfaces/admin-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uURL = 'https://o-api-php.herokuapp.com/api.php';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.uURL);
  }

  addUsers(user: any): Observable<any>{
    return this.http.post(`${this.uURL}?${user}`,user);
  }

  updateUsers(user: any): Observable<any>{
    return this.http.put(`${this.uURL}/${user.idUsuario}`,user);
  }

  deleteUsers(user: any): Observable <any>{
    return this.http.delete(`${this.uURL}/${user.idUsuario}`,user);
  }

}