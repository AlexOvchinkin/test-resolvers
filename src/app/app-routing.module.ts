import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellModule } from './AppShell/shell.module';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', loadChildren: './AppShell/shell.module#ShellModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ShellModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
