import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  favouritos:any[] = [];

  constructor() { }

  public saveData(value:any) {
    localStorage.setItem("favouritos", JSON.stringify(value));
  }

  public getData() {
    let data = JSON.parse(localStorage.getItem("favouritos")!);
    return data;
  }
  public removeData() {
    localStorage.removeItem("favouritos");
  }

  public clearData() {
    localStorage.clear();
  }
}
