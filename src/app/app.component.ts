import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Title } from '@angular/platform-browser';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';
@Component({
  selector: 'fuf-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

}
