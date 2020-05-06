import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadExcelComponent } from './read-excel.component';
import { StepperComponent } from './pages/stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    component: ReadExcelComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadExcelRoutingModule {}
