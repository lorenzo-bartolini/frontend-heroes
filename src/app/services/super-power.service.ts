import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperPowerService {

  baseApiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createSuperPower(superPower: any){
    return this.http.post(`${this.baseApiUrl}/sp`, superPower)
  }
  getById(id: number): Observable<any>{
    return this.http.get(`${this.baseApiUrl}/sp/${id}`)
  }
  removeById(id : number): Observable<any>{
    return this.http.delete(`${this.baseApiUrl}/sp/${id}`)
  }

}
