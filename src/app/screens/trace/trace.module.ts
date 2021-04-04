import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceComponent } from './trace.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: TraceComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [TraceComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class TraceModule { }
