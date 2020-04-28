import { Injectable } from '@angular/core';
import { Covid } from 'src/app/models/covid';

@Injectable({
  providedIn: 'root',
})
export class AutomapperService {
  constructor() {}

  JSONToCovidObject(obj): Covid {
    const covid: Covid = new Covid();
    covid.casesActive = obj.cases.active;
    covid.country = obj.country;
    covid.casesActive = obj.cases.active;
    covid.casesNew = obj.cases.new;
    covid.casesRecovered = obj.cases.recovered;
    covid.casesTotal = obj.cases.total;
    covid.deathsNew = obj.deaths.new;
    covid.deathsTotal = obj.deaths.total;
    covid.totalTests = obj.tests.total;
    covid.date = obj.time;
    return covid;
  }

  JSONTOArrayCovid(obj): Covid[] {
    const result: Covid[] = [];
    obj.response.map((item) => {
      result.push(this.JSONToCovidObject(item));
    });
    return result;
  }
}
