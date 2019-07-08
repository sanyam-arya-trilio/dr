import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CloudLandingComponent } from './cloud-landing/cloud-landing.component';
import { FormsModule } from '@angular/forms';
import { CloudAddDialogComponent } from './cloud-add-dialog/cloud-add-dialog.component';

@NgModule({
  declarations: [CloudLandingComponent, CloudAddDialogComponent],
  imports: [CommonModule, AppMaterialModule, FormsModule],
  entryComponents: [CloudAddDialogComponent]
})
export class CloudModule {}
