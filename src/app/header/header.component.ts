import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  is_logged_in: any = false;
  first_name: string;
  last_name: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('is_logged_in')) {
      this.is_logged_in = localStorage.getItem('is_logged_in');
      this.first_name = localStorage.getItem('first_name');
      this.last_name = localStorage.getItem('last_name');
    }
  }

  logout() {
    this.is_logged_in = false;
    localStorage.removeItem('is_logged_in');
    localStorage.removeItem('user_id');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('email');
  }

}
