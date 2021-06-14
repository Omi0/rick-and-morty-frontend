import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

describe('Router: appRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/characters'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/characters');
      });
    })
  );

  it(
    `navigate to '/unknown' redirects you to '/characters'`,
    waitForAsync(() => {
      router.navigate(['/unknown']).then(() => {
        expect(location.path()).toBe('/characters');
      });
    })
  );

  it(
    `navigate to '/characters' redirects you to '/characters'`,
    waitForAsync(() => {
      router.navigate(['/characters']).then(() => {
        expect(location.path()).toBe('/characters');
      });
    })
  );
});
