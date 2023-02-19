import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { TesterComponent } from './routes/tester/tester.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tester', component: TesterComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
