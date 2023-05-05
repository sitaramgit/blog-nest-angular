import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './common/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { UnAuthenticatedComponent } from './layout/un-authenticated/un-authenticated.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    UnAuthenticatedComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
