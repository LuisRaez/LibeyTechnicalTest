import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API: string = environment.pathLibeyTechnicalTest;
  constructor(private httpClient: HttpClient) {

  }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_API + 'LibeyUser').pipe(map(resp => resp))
  }

  getUserById(documentNumber: string): Observable<any> {
    return this.httpClient.get<any>(this.URL_API + 'LibeyUser' + '/' + documentNumber).pipe(map(resp => resp));
  }
  saveUser(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + 'LibeyUser', request).pipe(map(resp => resp));
  }

  updateUser(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + 'LibeyUser', request).pipe(map(resp => resp));
  }

  deleteUser(documentNumber: string): Observable<any> {
    return this.httpClient.get<any>(this.URL_API + 'LibeyUser/' + documentNumber).pipe(map(resp => resp));
  }
}