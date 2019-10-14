import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudLandingComponent } from './cloud/cloud-landing/cloud-landing.component';
import { AppMaterialModule } from './app-material/app-material.module';

const routes: Routes = [{ path: 'clouds', component: CloudLandingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppMaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
