import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const primengModules = [FormsModule, ReactiveFormsModule, HttpClientModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengModules
  ],
  exports: [primengModules]
})
export class SharedModule { }
