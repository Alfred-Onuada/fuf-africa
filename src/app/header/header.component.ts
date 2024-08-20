import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'fuf-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navIsOpen = false;
  currentPage = '';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.currentPage = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0]?.path || '/';
    });
  }
}
