import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudLandingComponent } from './cloud/cloud-landing/cloud-landing.component';

const routes: Routes = [{ path: 'clouds', component: CloudLandingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
