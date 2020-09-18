import { NgxDyncmpModule } from './../../projects/ngx-dyncmp/src/lib/ngx-dyncmp.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { TotoComponent } from './toto/toto.component';
import { FormsModule } from '@angular/forms';
import { NestComponent } from './nest/nest.component';
import { MatButtonModule } from '@angular/material/button';
import { Todo2Component } from './todo2/todo2.component';

@NgModule({
  declarations: [
    AppComponent,
    TotoComponent,
    NestComponent,
    Todo2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxDyncmpModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
