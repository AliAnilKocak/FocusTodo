import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private router: Router) {
  }

  isRouteAuth(): boolean {
    return !(this.router.url === '/login' || this.router.url === '/register');
  }

  ngOnInit(): void {
  }


}
