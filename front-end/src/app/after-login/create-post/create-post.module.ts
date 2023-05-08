import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/common/shared/shared.module';


const routes: Routes = [
  {path:'', component: CreatePostComponent}
];
@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CreatePostModule { }
