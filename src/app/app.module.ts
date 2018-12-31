import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
