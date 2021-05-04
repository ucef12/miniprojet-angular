import { Component, OnInit } from '@angular/core';
import { User } from '../config/models/user';
import { UserService } from '../config/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService) {
    this.userService.getAll().subscribe(users=>{
      this.users = users as User[];
    })
   }

  ngOnInit(): void {
  }
    //  ['a','b','c']
  delete(user:User){
    this.userService.delete(user.id).subscribe(()=>{
      const index = this.users.indexOf(user);
      this.users.splice(index,1);
    })
  }

}
