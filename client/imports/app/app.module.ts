import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
	Import all components
*/
import { AppComponent } from './app.component';
import { CONTENTSCREEN_DECLARATIONS } from './contentscreen';
import { HOMESCREEN_DECLARATIONS } from './homescreen';

 
@NgModule({
  imports: [
    BrowserModule
  ],
  // Use all declarations of the imported components, here.
  declarations: [
    AppComponent,
    ...CONTENTSCREEN_DECLARATIONS,
    ...HOMESCREEN_DECLARATIONS,
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}