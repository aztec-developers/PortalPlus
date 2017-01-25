import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
	Import all components
*/
import { AppComponent } from './app.component';
import { SEMESTERS_DECLARATIONS } from './semesters';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  // Use all declarations of the imported components, here.
  declarations: [
    AppComponent,
    ...SEMESTERS_DECLARATIONS,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}