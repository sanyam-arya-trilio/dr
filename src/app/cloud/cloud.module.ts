import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CloudAddDialogComponent } from './cloud-add-dialog/cloud-add-dialog.component';
import { CloudDetailComponent } from './cloud-detail/cloud-detail.component';
import { CloudLandingComponent } from './cloud-landing/cloud-landing.component';
@NgModule({
  declarations: [CloudLandingComponent, CloudAddDialogComponent, CloudDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [CloudAddDialogComponent]
})
export class CloudModule {}
