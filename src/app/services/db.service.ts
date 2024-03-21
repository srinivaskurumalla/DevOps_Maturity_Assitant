import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {


  isSidebarOpen: boolean = true
  selectedItem: string = '/feature/config'
  color = ''
  private selectedMenuItemSubject = new BehaviorSubject<string>('');
  selectedMenuItem$ = this.selectedMenuItemSubject.asObservable();

  allScores: { item: string, identifier: string, value: number }[] = []

  constructor() { }

  setSelectedMenuItem(menuItem: string) {
    this.selectedMenuItemSubject.next(menuItem);
  }
}
