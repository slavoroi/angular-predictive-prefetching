import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

// Custom preloading strategy
@Injectable({
  providedIn: 'root'
})
export class MyPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'example',
    loadChildren: () =>
      import('./example/example.module').then(m => m.ExampleModule)
  },
  {
    path: 'media',
    data: {preload: true},// preload flag
    loadChildren: () =>
      import('./media/media.module').then(m => m.MediaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {preloadingStrategy: PreloadAllModules}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
