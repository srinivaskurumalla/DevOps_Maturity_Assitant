import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(private router: Router) { }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }


}
