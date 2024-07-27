import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {

  get(key: string): T {
    return JSON.parse(localStorage.getItem(key) ?? "[]") as T;
  }

  set(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}