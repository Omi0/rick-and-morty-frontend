import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

// load and register locale data
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule.forRoot(), RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }],
})
export class AppModule {}
