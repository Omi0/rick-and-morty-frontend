# Rick and Morty Frontend

This is an Angular test applicaiton which consumes https://rickandmortyapi.com. Objective of this applicaiton is to show different techniques and approaches in building Angular applicaiton utilizing SOLID design principle.

Application is hosted by Firebase Hosting https://rick-and-morty-frontend.web.app

# Dependencies

* Angular 12
* Normalize.css

# For Developers

For deployment convenience following Firebase Hosting Github Actions were configured:
* Testing and Deploying on PR
* Testing and Deploying on Merge

For each PR there is a new preview URL generated in a format https://rick-and-morty-frontend--{{branch_suffix}}.web.app

### Run

```
npm run start
```

### Test

```
npm run test
```

### Build

```
npm run build
```

# Test Coverage Report
```
Statements   : 92.55% ( 87/94 )
Branches     : 81.58% ( 31/38 )
Functions    : 87.1% ( 27/31 )
Lines        : 92.41% ( 73/79 )
```

# Ways To Improve

* Increase test coverage.
* Implement RouteReuseStrategy for CharactersListComponent route. This will massively reduce API request on CharactersListComponent, as well as will allow us to restore scrolling position after coming back from CharacterViewComponent.
* Lazyload images
