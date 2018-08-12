import { FirstCharacterUpperCase } from './user/custompipe';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';

import{UserService} from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent, 
    ProfileComponent,
    FirstCharacterUpperCase
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule,
    AdminModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
