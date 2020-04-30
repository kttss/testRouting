import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { HttpHeaders } from '@angular/common/http';
import { AutomapperService } from '../automapper/automapper.service';
import { Covid } from 'src/app/models/covid';
import { CovidDay } from 'src/app/models/covid-day';
import { CovidMap } from 'src/app/models/covid-map';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(
    private network: NetworkService,
    private automapper: AutomapperService
  ) {}

  getStatistique() {
    return this.network
      .get('https://api.covid19api.com/summary')
      .then((data) => {
        const result: Covid[] = this.automapper
          .JSONTOArrayCovid(data)
          .sort((a, b) => b.casesTotal - a.casesTotal);
        return Promise.resolve(result);
      });
  }

  getStatistiqueMap() {
    return this.network
      .get(
        'https://coviddataapi-env.ca-central-1.elasticbeanstalk.com/api/getData?dataType=globalMapSummary'
      )
      .then((data) => {
        const result: CovidMap[] = this.automapper.JSONTOArrayCovidMap(data);
        return Promise.resolve(result);
      });
  }

  getStatistiqueByCountry(country: string, from: string, to: string) {
    console.log(from);
    return this.network
      .get(
        'https://api.covid19api.com/country/' +
          country +
          '?from=' +
          from +
          '&to=' +
          to
      )
      .then((data) => {
        const result: CovidDay[] = this.automapper.JSONTOArrayCovidDay(data);
        return Promise.resolve(result);
      });
  }
}
