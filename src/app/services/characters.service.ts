import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Character, CharacterParams } from '@models/character';
import { Paginated } from '@models/paginated';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  get(id: number): Observable<Character> {
    return this.apiService
      .getResourceUrlByType('characters')
      .pipe(switchMap((url) => this.httpClient.get<Character>(`${url}/${id}`)));
  }

  getAll(params?: Partial<CharacterParams>): Observable<Paginated<Character[]>> {
    return this.apiService
      .getResourceUrlByType('characters')
      .pipe(switchMap((url) => this.httpClient.get<Paginated<Character[]>>(url, { params })));
  }
}
