import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { HttpHeaders } from '@angular/common/http';
import { AutomapperService } from '../automapper/automapper.service';
import { Covid } from 'src/app/models/covid';

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
      .get('https://covid-193.p.rapidapi.com/statistics', {
        headers: new HttpHeaders({
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key':
            '18dba1c90amshae73bb19dc76ca6p11dcf8jsn127a6c7396cd',
        }),
      })
      .then((data) => {
        const result: Covid[] = this.automapper
          .JSONTOArrayCovid(data)
          .sort((a, b) => b.casesTotal - a.casesTotal);
        return Promise.resolve(result);
      });
  }
}
