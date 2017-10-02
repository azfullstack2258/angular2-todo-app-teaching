import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'home', component: AppComponent }
];

export const routing = RouterModule.forRoot(routes);
