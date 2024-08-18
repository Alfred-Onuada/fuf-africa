import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./../header/header.component";
import { FooterComponent } from "./../footer/footer.component";
import { Title } from '@angular/platform-browser';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VolunteerModalComponent } from '../volunteer-modal/volunteer-modal.component';

@Component({
  selector: 'fuf-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BaseChartDirective, RouterLink, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home | Franciso Udofia Foundation';
  chartData: ChartData = {
    datasets: [
      {
        data: [40, 35, 10, 10, 5],
        backgroundColor: [
          '#BEF3C0',
          '#AC94F1',
          '#FFF0CA',
          '#F9CF64',
          '#F38FBF',
        ],
        borderWidth: 0,
      }
    ]
  };

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
