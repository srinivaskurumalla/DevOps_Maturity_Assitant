import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature', loadChildren: () => import('./components/feature1/feature1.module').then(m => m.Feature1Module) },
  { path: '**', loadChildren: () => import('./components/feature1/feature1.module').then(m => m.Feature1Module) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
