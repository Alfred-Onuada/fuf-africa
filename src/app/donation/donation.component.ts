import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from "@angular/common"
import { MatDialog } from '@angular/material/dialog';
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fuf-donation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  section: 'overview' | 'impact' | 'what you get' = 'overview';

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(VolunteerModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
