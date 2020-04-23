import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { Logger } from 'src/app/models/logger';

@Component({
  selector: 'app-log-historique',
  templateUrl: './log-historique.component.html',
  styleUrls: ['./log-historique.component.scss'],
})
export class LogHistoriqueComponent implements OnInit {
  public logData: Logger[] = [];
  constructor(private logService: LoggerService) {}

  ngOnInit(): void {
    this.logService.getAllLog().then((data) => {
      this.logData = data;
    });
  }
}
