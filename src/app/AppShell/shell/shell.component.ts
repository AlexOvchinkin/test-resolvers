import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(delay(1000))
      .subscribe(data => {
        this.loading = false;
        this.router.navigate(['/app/user'], { queryParams: { sid: data['sid'] } });
      });
  }

}
