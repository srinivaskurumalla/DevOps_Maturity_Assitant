import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedOption: boolean = false;
  color = ''
  constructor(public dbService:DbService,private router: Router,) { }


  ngOnInit(): void {
   
  }
 
  // selectedItem(menuItem: string) {
  //   this.dbService.setSelectedMenuItem(menuItem);
  // }
  // selectedItem(selectedItem: string): void {
  //   debugger

  //   this.color = selectedItem;
  //   localStorage.setItem('selectedItemColor', this.color);
  // }

}
