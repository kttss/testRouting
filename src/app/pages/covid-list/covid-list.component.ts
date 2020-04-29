import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from 'src/app/services/covid/covid.service';
import { Covid } from 'src/app/models/covid';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss'],
})
export class CovidListComponent implements OnInit {
  constructor(private covidService: CovidService) {}
  displayedColumns: string[] = [
    'country',
    'casesTotal',
    'casesNew',
    'recoveredTotal',
    'recoveredNew',
    'deathsTotal',
    'deathsNew',
    'date',
  ];
  dataSource: MatTableDataSource<Covid> = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    this.covidService.getStatistique().then((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
