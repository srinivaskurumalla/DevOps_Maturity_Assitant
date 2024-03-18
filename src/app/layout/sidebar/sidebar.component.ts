import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedOption: boolean = false;
  color = ''
  constructor() { }


  ngOnInit(): void {
    // this.color = localStorage.getItem('selectedItemColor') || '';
    
  }
  logout(): void {
    //this.authenticationService.logout();
  }
  selectedItem(selectedItem: string): void {
    debugger

    this.color = selectedItem;
    localStorage.setItem('selectedItemColor', this.color);
  }

}
