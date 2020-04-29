import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidService } from 'src/app/services/covid/covid.service';
import { CovidDay } from 'src/app/models/covid-day';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-covid-details',
  templateUrl: './covid-details.component.html',
  styleUrls: ['./covid-details.component.scss'],
})
export class CovidDetailsComponent implements OnInit {
  multi: any = [];
  colorScheme = {
    domain: ['#C7B42C', '#5AA454', '#FF0000'],
  };
  data: CovidDay[];
  chartdata: any[] = [];
  country: string;
  constructor(
    private covidService: CovidService,
    private acivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.country = this.acivatedRoute.snapshot.params.country;
    this.covidService
      .getStatistiqueByCountry(
        this.country,
        moment().add(-30, 'days').format('YYYY-MM-DD'),
        moment().format('YYYY-MM-DD')
      )
      .then((data: CovidDay[]) => {
        this.multi = this.getDataChartCases(data);
      });

    this.covidService
      .getStatistiqueByCountry(
        this.country,
        '2020-01-01',
        moment().format('YYYY-MM-DD')
      )
      .then((data: CovidDay[]) => {
        this.chartdata = this.getDataChartTotal(data);
      });
  }

  getDataChartCases(data: CovidDay[]) {
    const chartData = [];
    data.map((item, i) => {
      chartData.push({
        name: moment(item.date).format('DD-MMMM'),
        series: [
          {
            name: 'confirmed',
            value: item.confirmed,
          },
          {
            name: 'recovered',
            value: item.recovered,
          },
          {
            name: 'deaths',
            value: item.deaths,
          },
        ],
      });
    });
    return chartData;
  }

  getDataChartTotal(data: CovidDay[]) {
    const chart = [
      {
        name: 'confirmed',
        series: [],
      },
      {
        name: 'recovered',
        series: [],
      },
      {
        name: 'deaths',
        series: [],
      },
    ];

    data.map((item) => {
      chart[0].series.push({
        name: moment(item.date).format('DD-MMMM'),
        value: item.confirmedTotal,
      });
      chart[1].series.push({
        name: moment(item.date).format('DD-MMMM'),
        value: item.recoveredTotal,
      });
      chart[2].series.push({
        name: moment(item.date).format('DD-MMMM'),
        value: item.deathsTotal,
      });
    });
    return chart;
  }
}
