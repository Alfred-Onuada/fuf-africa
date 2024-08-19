import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'fuf-project-read-more',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './project-read-more.component.html',
  styleUrl: './project-read-more.component.css'
})
export class ProjectReadMoreComponent {
  title = 'Projects | Franciso Udofia Foundation';
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
