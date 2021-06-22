import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateInterceptor } from './interceptors/date.interceptor';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, InfiniteScrollComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true }],
    };
  }
}
