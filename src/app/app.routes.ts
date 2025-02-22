import { Routes } from '@angular/router';
import { FinalBuildComponent } from './components/final-build/final-build.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finalBuild', component: FinalBuildComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
