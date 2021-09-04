import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {LoginModule} from './Auth/login/login/login.module';
import {AuthGuard} from './AuthGuard/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import(`./Auth/login/login/login.module`).then(
      module => module.LoginModule
    )
  },
  { 
    path: '', 
    loadChildren: () => import(`./home/home.module`).then(
      module => module.HomeModule
    ),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
