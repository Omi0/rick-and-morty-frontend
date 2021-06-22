import { Component, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Filter } from '@models/filter';
import { Select } from '@models/select';

@Component({
  selector: 'app-characters-filter',
  templateUrl: './characters-filter.component.html',
  styleUrls: ['./characters-filter.component.scss'],
})
export class CharactersFilterComponent {
  public statusSelect: Select = [
    { name: 'Alive', value: 'alive' },
    { name: 'Dead', value: 'dead' },
    { name: 'Unknown', value: 'unknown' },
  ];

  public genderSelect: Select = [
    { name: 'Female', value: 'female' },
    { name: 'Male', value: 'male' },
    { name: 'Genderless', value: 'genderless' },
    { name: 'Unknown', value: 'unknown' },
  ];

  public filter$: Subject<Filter> = new Subject<Filter>();

  @Output()
  onFilterChange: Observable<Filter> = this.filter$.pipe(distinctUntilChanged());
}
