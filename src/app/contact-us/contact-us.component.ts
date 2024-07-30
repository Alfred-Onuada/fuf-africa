import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'fuf-contact-us',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  mapHeight: number = 400;
  mapWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.mapWidth = (event.target as Window).innerWidth;
  }
}
