import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateInterceptor } from './interceptors/date.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true }],
    };
  }
}
