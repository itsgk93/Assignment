
import { UserService } from './../user/user.service';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent],
  providers: [UserService]
})
export class DashboardModule { }
