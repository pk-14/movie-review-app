import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  getMoviesList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'movies/')
  }

  getActorsList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'actors/')
  }

  putMoviesList(val: any){
      return this.http.put(this.APIUrl + 'movies/', val)
  }

  registerUser(userData: { username: string, password: string, email: string; }): Observable<any> {
    return this.http.post(this.APIUrl + 'users/', userData)
  }

  loginUser(userData: { username: string, password: string}): Observable<any> {
    return this.http.post(this.APIUrl + 'auth/', userData)
  }
}
