import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CloudLandingComponent } from './cloud-landing/cloud-landing.component';
import { FormsModule } from '@angular/forms';
import { CloudAddDialogComponent } from './cloud-add-dialog/cloud-add-dialog.component';
import { CloudOperationsService } from './services/cloud-operations.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CloudLandingComponent, CloudAddDialogComponent],
  imports: [CommonModule, AppMaterialModule, FormsModule, HttpClientModule],
  entryComponents: [CloudAddDialogComponent],
  providers: [CloudOperationsService]
})
export class CloudModule {}
