import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './dashboard/view/view.component';
import { AdminComponent } from './admin/admin/admin.component';


@NgModule({
    imports: [
    RouterModule.forRoot([

         { path: 'user', component:  UserComponent },
         { path: 'profile', component: ProfileComponent},
         { path: 'view', component: ViewComponent },
         { path: 'admin', component: AdminComponent  }],)
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
