import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule.forRoot(), RouterModule.forRoot(appRoutes), ],
  bootstrap: [AppComponent],
})
export class AppModule {}
