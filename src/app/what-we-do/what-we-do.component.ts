import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fuf-what-we-do',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {
  title = 'What We Do | Franciso Udofia Foundation';
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
