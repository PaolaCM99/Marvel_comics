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
  urlMarvel=environment.gate;

  getCharacters():Observable<object> {
    return this.http.get(`${this.urlMarvel}`);
  }
}
