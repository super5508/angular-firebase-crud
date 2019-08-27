import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../service/firebase.service';
import { DialogComponent } from './dialog/dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    FirebaseService
  ]
})
export class AddServiceModule { }
