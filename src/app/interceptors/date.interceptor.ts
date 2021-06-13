import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { nonEmptyObject } from '@helpers/functions';

@Injectable({
  providedIn: 'root',
})
export class DateInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.postProcessDates(event.body);
        }
        return event;
      })
    );
  }

  public postProcessDates(obj: any): any {
    if (nonEmptyObject(obj)) {
      for (const key of Object.keys(obj)) {
        const value = obj[key];
        const iso8601 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

        if (iso8601.test(value) === true) {
          obj[key] = new Date(value);
        }

        this.postProcessDates(value);
      }
    }
    return obj;
  }
}
