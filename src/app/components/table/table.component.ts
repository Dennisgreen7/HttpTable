import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any[] = [];
  constructor(private _userService: UsersService) { 
    _userService.getUsers()
    .subscribe((users: any)=>{
      this.users = users;
    });
  }

  ngOnInit(): void {
  }

}
