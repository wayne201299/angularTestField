import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

const declarations = [AppComponent, NavbarComponent];
const imports = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
