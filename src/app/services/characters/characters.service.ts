import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interface/characters/character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  urlMarvel= `${environment.endpoint}`;

  getAllCharacters(offset:number):Observable<Character[]> {
    return this.http.get<Character[]>(`${this.urlMarvel}characters`, {params: {ts: '1', apikey: `${environment.public_key}`, hash: `${environment.md5}`,limit: 100, offset:offset}});
  };

  getComic(resource:string):Observable<object> {
    return this.http.get(`${resource}`, {params: {ts: '1', apikey: `${environment.public_key}`, hash: `${environment.md5}`,limit: 100}});
  };
}
