import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastsContainer } from './toasts-container.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ckeditor4-angular';
const primengModules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ToastsContainer,
  NgFor,
  NgIf,
  NgTemplateOutlet,
  NgbToastModule,
  CKEditorModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, primengModules],
  exports: [primengModules],
})
export class SharedModule {}
