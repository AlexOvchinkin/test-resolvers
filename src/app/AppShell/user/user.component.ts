import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = { name: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.user$$.subscribe(user => this.user = user);
  }

  next() {
    this.router.navigate(['/app/car'], { queryParamsHandling: 'preserve' });
  }
}
