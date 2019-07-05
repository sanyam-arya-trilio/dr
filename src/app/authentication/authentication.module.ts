import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CloudLandingComponent } from '../cloud/cloud-landing/cloud-landing.component';

@NgModule({
  declarations: [CloudLandingComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class AuthenticationModule {}
