import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../data.auth-user.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logStat: boolean
  constructor(
    private auth: AuthUserService,
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.logStat = auth.loggedIn()
      }
    })
  }

  ngOnInit() {
    this.logStat = this.auth.loggedIn()
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

}
