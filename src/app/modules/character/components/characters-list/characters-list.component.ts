import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getPageIdFromUrl } from '@helpers/functions';
import { Character, CharacterParams } from '@models/character';
import { Filter } from '@models/filter';
import { Paginated } from '@models/paginated';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { concatMap, map, pairwise, startWith } from 'rxjs/operators';
import { Nullable } from 'src/app/modules/core/models/nullable';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public page$!: Observable<Paginated<Character[]>>;
  public param$: BehaviorSubject<Partial<CharacterParams>> = new BehaviorSubject<Partial<CharacterParams>>({ page: 1 });
  public scroll$: Subject<Event> = new Subject<Event>();

  @ViewChild('infiniteScroll', { read: ElementRef })
  private infiniteScroll!: ElementRef<HTMLElement>;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.page$ = this.param$.pipe(
      concatMap((param) => this.charactersService.getPage(param)),
      startWith({} as Paginated<Character[]>), // Used in conjunction with pairwise()
      pairwise(), // pairing with a previous value to concat pages
      map(([prev, curr]) =>
        curr?.info?.prev === null
          ? curr // First page -> flushing results
          : {
              // Next page -> accumulating results
              info: curr.info,
              results: [...prev.results, ...curr.results],
            }
      )
    );
  }

  loadFirstPage(filter: Filter): void {
    this.infiniteScroll.nativeElement.scrollTo(0, 0);
    this.param$.next({
      page: 1, // resetting to first page
      ...filter,
    });
  }

  loadNextPage(nextPageUrl: Nullable<string>): void {
    const pageId = getPageIdFromUrl(nextPageUrl);
    if (pageId) {
      this.param$.next({
        ...this.param$.value,
        page: pageId,
      });
    }
  }
}
