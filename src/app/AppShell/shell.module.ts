import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { UserComponent } from './user/user.component';
import { CarComponent } from './car/car.component';
import { UserResolverService } from './user-resolver.service';
import { DataService } from './data.service';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    resolve: { sid: UserResolverService },
    children: [
      { path: 'user', component: UserComponent },
      { path: 'car', component: CarComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShellComponent, CarComponent, UserComponent]
})
export class ShellModule { }
