import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfiniteScrollComponent } from './infinite-scroll.component';

@Component({
  template: `<app-infinite-scroll><div class="content">Content</div></app-infinite-scroll>`,
})
class InfiniteScrollHostComponent {}

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;
  let hostComponent: InfiniteScrollHostComponent;
  let hostFixture: ComponentFixture<InfiniteScrollHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollComponent, InfiniteScrollHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    hostFixture = TestBed.createComponent(InfiniteScrollHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(hostComponent).toBeTruthy();
  });

  it('should project <ng-content> from host', () => {
    const hostFixtureDe: DebugElement = hostFixture.debugElement;
    const contentDiv: DebugElement = hostFixtureDe.query(By.css('div.content'));
    expect(contentDiv).toBeDefined();
    expect(contentDiv.nativeElement.textContent).toContain('Content');
  });
});
