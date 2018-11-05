import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { UserGuard } from '../user.guard';
import { AccountComponent } from './account/account.component';

const userRoutes: Routes = [
  {
    path: 'user/activity',
    component: ActivityComponent,
  },
  {
    path: 'user/account',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
