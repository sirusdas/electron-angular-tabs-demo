import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {Tab1Component} from './tab1/tab1.component';

const tmRoutes: Routes = [
  {
    path: 'tab1',
    component: Tab1Component
  },
  // {path: '**', redirectTo: '/tab1'}
];

@NgModule({
  imports: [
    RouterModule.forChild(tmRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class TabsRoutingModule {
  constructor(){
    console.log('..inside tm.routing.ts');
  }
}
