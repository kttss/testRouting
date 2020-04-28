import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid/covid.service';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss'],
})
export class CovidListComponent implements OnInit {
  constructor(private covidService: CovidService) {}
  displayedColumns: string[] = [
    'country',
    'casesActive',
    'casesNew',
    'casesRecovered',
    'casesTotal',
    'deathsNew',
    'deathsTotal',
    'totalTests',
    'date',
  ];
  dataSource: Covid[] = [];
  data: Covid[] = [];
  ngOnInit(): void {
    this.covidService.getStatistique().then((data) => {
      this.data = data;
      this.dataSource = this.data.slice(0, 10);
    });
  }

  paginate(event) {
    this.dataSource = this.data.slice(
      event.pageIndex * event.pageSize,
      (event.pageIndex + 1) * event.pageSize
    );
  }
}
