import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudLandingComponent } from './cloud/cloud-landing/cloud-landing.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CloudDetailComponent } from './cloud/cloud-detail/cloud-detail.component';

const routes: Routes = [{
  path: 'clouds', component: CloudLandingComponent},
  { path: 'cloud/:id', component: CloudDetailComponent, pathMatch: 'full' },
  { path:'**',redirectTo:'clouds'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppMaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
