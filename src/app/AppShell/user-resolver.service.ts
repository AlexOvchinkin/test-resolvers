import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let sid = +route.queryParamMap.get('sid') || '';
    if (!sid) {
      sid = new Date().getTime();
    }

    if (sid === 123) {
      this.userService.user$$.next({ name: 'Alex' });
    } else {
      this.userService.user$$.next({ name: 'John Dow' });
    }
    return of(sid);
  }
}
