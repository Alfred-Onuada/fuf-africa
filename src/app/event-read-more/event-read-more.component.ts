import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'fuf-event-read-more',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './event-read-more.component.html',
  styleUrl: './event-read-more.component.css'
})
export class EventReadMoreComponent {

}
