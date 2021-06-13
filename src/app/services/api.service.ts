import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Resources } from '@models/resource';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private resources$: Observable<Resources>;

  constructor(private httpClient: HttpClient) {
    this.resources$ = this.httpClient.get<Resources>(environment.baseUrl).pipe(shareReplay(1));
  }

  public getResourceUrlByType<T extends keyof Resources>(type: T): Observable<string> {
    return this.resources$.pipe(
      map((res) => {
        if (res[type] === undefined) {
          throw new Error(`Invalid resource type: '${type}'`);
        }
        return res[type];
      })
    );
  }
}
