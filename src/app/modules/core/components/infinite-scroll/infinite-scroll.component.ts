import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit, AfterViewInit {
  private readonly eventType: string = 'infinite-scroll::scrolled';

  @Output()
  public scrolled: EventEmitter<Event> = new EventEmitter();

  @ViewChild('anchor')
  private anchor!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(private host: ElementRef) {}

  ngOnInit() {
    const options: IntersectionObserverInit = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit(new Event(this.eventType));
    }, options);
  }

  ngAfterViewInit() {
    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.host.nativeElement);

    return style.getPropertyValue('overflow') === 'auto' || style.getPropertyValue('overflow-y') === 'scroll';
  }
}
