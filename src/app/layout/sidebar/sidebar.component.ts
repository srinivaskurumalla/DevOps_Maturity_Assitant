import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedOption: boolean = false;
  color = ''
  constructor(private dbService:DbService) { }


  ngOnInit(): void {
    // this.color = localStorage.getItem('selectedItemColor') || '';
    
  }
  logout(): void {
    //this.authenticationService.logout();
  }
  // select(selectedItem: string){
  //   this.dbService.selecteMenu(selectedItem)
  // }
  selectedItem(selectedItem: string): void {
    debugger

    this.color = selectedItem;
    localStorage.setItem('selectedItemColor', this.color);
  }

}
