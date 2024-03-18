import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  // @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  firstLetter: any 
  constructor(private router: Router) { }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  onLoginClick() {
    console.log('Login link clicked');
  }

  viewProfile() {

  }
  logout() {

  }

  onLogOutClick() {
  }
  onUserProfileClick() {
    // this.router.navigate(['/profile']);

  }

  //n
  isUserAuthenticated(): boolean {
    return true
  }
}
