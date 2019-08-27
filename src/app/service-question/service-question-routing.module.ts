import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
import { ServiceQuestionComponent } from './service-question.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceQuestionComponent,
    children: [
      { path: '', component: AddServiceComponent },
      { path: 'account', component: UserAccountComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceQuestionRoutingModule { }
