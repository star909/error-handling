import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ErrorHandlingComponent } from './modules/error-handling/error-handling.component';

const routes: Routes = [
  { path: '', component:ErrorHandlingComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }