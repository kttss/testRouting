import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Logger } from 'src/app/models/logger';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private urlLogger: string = '/api/logger/';
  constructor(
    private network: NetworkService,
    private authService: AuthenticationService
  ) {}

  getAllLog() {
    return this.network.get(this.urlLogger);
  }
  addActionToLog(action: string, data: string) {
    const logger: Logger = {
      id: null,
      date: new Date(),
      user: this.authService.getInfoUser().username,
      typeAction: action,
      data,
    };
    return this.network.post(this.urlLogger, logger);
  }
}
