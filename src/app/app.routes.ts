import { Routes } from '@angular/router';
import { FinalBuildComponent } from './components/final-build/final-build.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finalBuild', component: FinalBuildComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
