import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
	Import all components
*/
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CONTENTSCREEN_DECLARATIONS } from './contentscreen';
import { HOMESCREEN_DECLARATIONS } from './homescreen';
import { LOGIN_SIGNUP_DECLARATIONS } from './login_signup';



@NgModule({
  imports: [
    BrowserModule,
    AccountsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  // Use all declarations of the imported components, here.
  declarations: [
    AppComponent,
    ...CONTENTSCREEN_DECLARATIONS,
    ...HOMESCREEN_DECLARATIONS,
    ...LOGIN_SIGNUP_DECLARATIONS,


  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
