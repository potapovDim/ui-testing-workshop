import { Page } from './pages/page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Page
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }