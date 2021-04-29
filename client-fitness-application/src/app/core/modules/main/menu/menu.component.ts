import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationLinks } from './navigation-links';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  allLinks = navigationLinks;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  goToLink(path: string): void {
    this.router.navigate([path]);
  }

}
