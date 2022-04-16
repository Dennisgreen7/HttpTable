import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: any = {};
  id: number = 0;
  constructor(private userservice: UsersService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; })
  }

  ngOnInit(): void {
    this.userservice.getSingaleUser(this.id)
      .subscribe((response: any) => {
        this.user = response;
      })
  }

}
