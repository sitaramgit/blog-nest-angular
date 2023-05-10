import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './after-login/home/home.component';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { UnAuthenticatedComponent } from './layout/un-authenticated/un-authenticated.component';

const routes: Routes = [
  
  {
    path: '', component: UnAuthenticatedComponent, children:[
      {
        path: 'login',
        loadChildren: () => import('./before-login/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./before-login/signup/signup.module').then(m => m.SignupModule)
      },
    ]
  },
  {
    path: '', component: AuthenticatedComponent, children:[
     
      {
        path: 'home',
        loadChildren: () => import('./after-login/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'create-post',
        loadChildren: () => import('./after-login/create-post/create-post.module').then(m => m.CreatePostModule)
      },
      {
        path: 'read-post/:id',
        loadChildren: () => import('./after-login/read-post/read-post.module').then(m => m.ReadPostModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
