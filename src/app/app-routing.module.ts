import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConstans } from './constants/routes';

const routes: Routes = [
  {
    path: RouterConstans.HOME,
    loadChildren: () =>
    import('./pages/pages.module').then((m) => m.PagesModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
