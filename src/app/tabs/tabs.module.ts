import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TabsRoutingModule} from './tabs-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';


import {Tab1Component} from './tab1/tab1.component';


@NgModule({
  imports: [
    RouterModule,
    TabsRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Tab1Component,
  ],
  exports: [
    Tab1Component
  ]
})

export class TabsModule {
  constructor(){
    console.log('tabs module ts... routing in progress..');
  }
}
