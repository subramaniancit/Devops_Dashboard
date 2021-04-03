import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./screens/reports/reports.module').then(m => m.ReportsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
