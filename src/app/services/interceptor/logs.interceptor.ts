import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class LogsInterceptor implements HttpInterceptor {
  constructor(private logger: LoggerService) {}
  rootExclu: string[] = ['/api/logger/', '/api/users/'];
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.rootExclu.filter((e) => request.url.startsWith(e)).length === 0) {
      this.logger
        .addActionToLog(
          request.method,
          request.url + JSON.stringify(request.body)
        )
        .then((data) => {});
    }
    return next.handle(request);
  }
}
