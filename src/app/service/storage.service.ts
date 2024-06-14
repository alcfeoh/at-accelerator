import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}
  //todo: Use a Signal to emit LocalStorage updates
  get<Type>(name: string): Type[] | void{
    let storedValues = localStorage.getItem(name);
    if(storedValues != undefined){
      return JSON.parse(storedValues);
    }
  }

  set<Type>(name: string, items: Type[]){
    localStorage.setItem(name, JSON.stringify(items));
  }
}
