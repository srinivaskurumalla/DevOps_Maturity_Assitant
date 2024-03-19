import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  isSidebarOpen: boolean = true
  selectedItem: string = '/feature/config'
  color = ''
  // selecteMenu(selectedItem: string): void {
  //   debugger

  //   this.color = selectedItem;
  //   localStorage.setItem('selectedItemColor', this.color);
  // }
}
