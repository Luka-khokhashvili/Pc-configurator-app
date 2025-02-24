import { Routes } from '@angular/router';
import { FinalBuildComponent } from './components/final-build/final-build.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finalBuild', component: FinalBuildComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
