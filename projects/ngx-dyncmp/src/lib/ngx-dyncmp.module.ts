import { NgModule } from '@angular/core';
import { NgxDyncmpDirective } from './ngx-dyncmp.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxDyncmpDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxDyncmpDirective]
})
export class NgxDyncmpModule { }
