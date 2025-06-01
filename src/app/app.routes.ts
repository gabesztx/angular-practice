import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignalPracticeComponent } from './component/signal-practice/signal-practice.component';
import {DataInputPropertyComponent} from './component/data-input-property/data-input-property.component';
import { DataOutputPropertyComponent } from './component/data-output-property/data-output-property.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signal-practice', component: SignalPracticeComponent },
  { path: 'data-input-property', component: DataInputPropertyComponent },
  { path: 'data-output-property', component: DataOutputPropertyComponent },
  { path: '**', redirectTo: '' }
];

