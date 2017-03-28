import { Route } from '@angular/router';

import { HomescreenComponent } from './homescreen/homescreen.component';
import { ContentscreenComponent } from './contentscreen/contentscreen.component';
import { SignupComponent } from './login_signup/signup.component';

export const routes: Route[] = [
  { path: '', component: HomescreenComponent },
  { path: 'content', component: ContentscreenComponent },
  { path: 'signup', component: SignupComponent }
];
