import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TypingScreenComponent } from './components/typing-screen/typing-screen.component';
import { ResultComponent } from './components/result/result.component';

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
