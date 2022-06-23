import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FahrenheitComponent } from './components/fahrenheit/fahrenheit.component';
import { InputComponent } from './components/input/input.component';
import { KelvinComponent } from './components/kelvin/kelvin.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    KelvinComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
