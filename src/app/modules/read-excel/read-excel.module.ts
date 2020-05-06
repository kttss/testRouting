import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadExcelRoutingModule } from './read-excel-routing.module';
import { ReadExcelComponent } from './read-excel.component';
import { StepperComponent } from './pages/stepper/stepper.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CustomFileComponent } from 'src/app/components/custom-file/custom-file.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
@NgModule({
  declarations: [ReadExcelComponent, StepperComponent],
  imports: [
    CommonModule,
    ReadExcelRoutingModule,
    MatStepperModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule,
  ],
})
export class ReadExcelModule {}
