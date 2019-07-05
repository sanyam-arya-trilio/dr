import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CloudModule } from './cloud/cloud.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AuthenticationModule,
    CloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
