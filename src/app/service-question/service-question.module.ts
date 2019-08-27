import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceQuestionRoutingModule } from './service-question-routing.module';
import { AppbarComponent } from '../components/appbar/appbar.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ServiceQuestionComponent } from './service-question.component';
import { SharedModule } from '../shared/shared.module';
import { UserAccountComponent } from './user-account/user-account.component';
import { AddServiceModule } from './add-service/add-service.module';

@NgModule({
  declarations: [
    AppbarComponent,
    AddServiceComponent,
    ServiceQuestionComponent,
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    ServiceQuestionRoutingModule,
    SharedModule,
    AddServiceModule,
  ]
})
export class ServiceQuestionModule { }
