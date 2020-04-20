import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetSuccessfullyComponent } from './password-reset-successfully/password-reset-successfully.component';


const routes: Routes = [
  { path: '', component: PasswordResetSuccessfullyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetSuccessfullyRoutingModule { }
