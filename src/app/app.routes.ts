import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TypingScreenComponent } from './typing-screen/typing-screen.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'type',
    component: TypingScreenComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
];
