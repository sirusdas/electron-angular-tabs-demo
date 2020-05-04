import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('../app/tabs/tabs.module').then(m => m.TabsModule),
  },
  /*{
    path: 'tabs', loadChildren: '../app/tabs/tabs.module#TabsModule', useAsDefault:true
  },*/
   // otherwise redirect to layout-TM
  // { path: '**', redirectTo: '/tabs/tab1' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) // Defines Preloading Strategies
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {
  constructor(){
    console.log('..inside app-routing...')
  }
}
