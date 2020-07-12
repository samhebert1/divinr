import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ElementalComponent } from './elemental/elemental.component';
import { AstrologicalComponent } from './astrological/astrological.component';
import { QuickReadComponent } from './quick-read/quick-read.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'quick-read', component: QuickReadComponent },
  { path: 'elemental', component: ElementalComponent },
  { path: 'astrological', component: AstrologicalComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DivinrRoutingModule {}
