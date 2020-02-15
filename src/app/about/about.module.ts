import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {RouterModule} from '@angular/router';
import {AboutChildComponent} from './child/about-child.component';

@NgModule({
  declarations: [AboutComponent, AboutChildComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'child/:id',
        component: AboutChildComponent
      }
    ])
  ]
})
export class AboutModule {
}
