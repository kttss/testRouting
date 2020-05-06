import { NgModule } from '@angular/core';
import { CustomFileComponent } from 'src/app/components/custom-file/custom-file.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CustomFileComponent],
  imports: [MaterialModule],
  exports: [CustomFileComponent, NgxUploaderModule],
})
export class SharedModule {}
