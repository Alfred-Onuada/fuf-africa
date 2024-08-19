import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fuf-media',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(VolunteerModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
