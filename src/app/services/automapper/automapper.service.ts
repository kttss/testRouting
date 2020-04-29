import { Injectable } from '@angular/core';
import { Covid } from 'src/app/models/covid';
import { CovidDay } from 'src/app/models/covid-day';

@Injectable({
  providedIn: 'root',
})
export class AutomapperService {
  constructor() {}

  JSONToCovidObject(obj): Covid {
    const covid: Covid = new Covid();
    covid.country = obj.Country;
    covid.countryCode = obj.Slug;
    covid.casesNew = obj.NewConfirmed;
    covid.casesTotal = obj.TotalConfirmed;
    covid.deathsNew = obj.NewDeaths;
    covid.deathsTotal = obj.TotalDeaths;
    covid.recoveredNew = obj.NewRecovered;
    covid.recoveredTotal = obj.TotalRecovered;
    covid.date = obj.Date;
    return covid;
  }

  JSONTOArrayCovid(obj): Covid[] {
    const result: Covid[] = [];
    obj.Countries.map((item) => {
      result.push(this.JSONToCovidObject(item));
    });
    return result;
  }

  JSONToCovidDayObject(obj, lastObj) {
    if (lastObj == null) {
      lastObj = { Active: 0, Confirmed: 0, Deaths: 0, Recovered: 0 };
    }
    const covidDay: CovidDay = new CovidDay();
    covidDay.active = obj.Active - lastObj.Active;
    covidDay.confirmed = obj.Confirmed - lastObj.Confirmed;
    covidDay.deaths = obj.Deaths - lastObj.Deaths;
    covidDay.recovered = obj.Recovered - lastObj.Recovered;
    covidDay.activeTotal = obj.Active;
    covidDay.confirmedTotal = obj.Confirmed;
    covidDay.deathsTotal = obj.Deaths;
    covidDay.recoveredTotal = obj.Recovered;
    covidDay.date = obj.Date;
    return covidDay;
  }

  JSONTOArrayCovidDay(obj): CovidDay[] {
    const result: CovidDay[] = [];
    obj.map((item, i) => {
      result.push(this.JSONToCovidDayObject(item, obj[i - 1]));
    });
    return result;
  }
}
