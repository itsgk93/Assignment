
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../user/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  today: number = Date.now();
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers=function(){
    this.users=this.userService.getUsersFromData();
  }

}
