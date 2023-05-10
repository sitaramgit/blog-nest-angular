import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadPostComponent } from './read-post.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: ReadPostComponent}
];

@NgModule({
  declarations: [
    ReadPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReadPostModule { }
