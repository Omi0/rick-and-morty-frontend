import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { characterRoutes } from './character.routes';

describe('Router: characterRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(characterRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/');
      });
    })
  );

  it(
    `navigate to '/:id' redirects you to '/:id'`,
    waitForAsync(() => {
      router.navigate(['/1']).then(() => {
        expect(location.path()).toBe('/1');
      });
    })
  );
});
