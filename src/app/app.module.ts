import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
