import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';

@Component({
  selector: 'fuf-about-us',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  title = 'About Us | Franciso Udofia Foundation';

  constructor(private titleService: Title, public dialog: MatDialog) {
    this.titleService.setTitle(this.title);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(VolunteerModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
