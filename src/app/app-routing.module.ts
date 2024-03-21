import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature', loadChildren: () => import('./components/feature1/feature1.module').then(m => m.Feature1Module) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
