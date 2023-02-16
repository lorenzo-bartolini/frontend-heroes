import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  baseApiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createOne(hero: any){
    return this.http.post(`${this.baseApiUrl}/hero`, hero)
  }

  getById(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.baseApiUrl}/hero/${id}`)
  }

  getAll(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseApiUrl}/hero`)
  }

  removeById(id : number): Observable<any>{
    return this.http.delete(`${this.baseApiUrl}/hero/${id}`)
  }

}
