import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../config/models/user';
import { UserService } from '../config/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User = new User();
  NotEdit=false;
  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      const id = params.id;
      this.NotEdit = id ? true : false
      this.userService.getById(id).subscribe(user=>{
        this.user = user as User;
      })
    })
  }

  ngOnInit(): void {
  }
  add(){
    if(this.user.id === undefined)
   { 
     this.userService.add(this.user).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }else{
    this.userService.edit(this.user).subscribe(user=>{
      this.router.navigate(['/']);
      
    })
  }
    
  }
}
