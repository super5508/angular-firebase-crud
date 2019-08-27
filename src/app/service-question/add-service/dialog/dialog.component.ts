import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../service/firebase.service';
import { Service, Question, EventRequest } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  curProgress = 0;
  serviceSelctGroup: FormGroup;
  dynamicForms: FormGroup[];

  loadingServices = true;

  validations: string[][];
  services: Service[];
  curQuestion: Question;
  totalQuestions: Question[];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.curQuestion = new Question();
    this.totalQuestions = [];

    this.firebaseService.getServices().subscribe(res => {
      this.services = res;
      this.loadingServices = false;
    });

    this.serviceSelctGroup = this.fb.group({
      newService: ['', Validators.required]
    });
  }

  getQuestion(stepper: MatStepper) {
    this.firebaseService.getQuestions(this.serviceSelctGroup.value.newService).subscribe(res => {
      this.totalQuestions = res;
      this.totalQuestions.pop();
      stepper.next();

      this.validations = this.totalQuestions.map(each => Object.keys(each.validation));

      this.dynamicForms = this.totalQuestions.map(each => this.fb.group({
        form: ['', Validators.required]
      }));
    });
  }

  onNext() {
    this.curProgress += 100 / this.totalQuestions.length ;
  }

  onPrev(stepper: MatStepper) {
    if (this.curProgress > 100 / this.totalQuestions.length) {
      this.curProgress -= 100 / this.totalQuestions.length;
    }
  }

  onSubmit() {

    let date;
    let questions: any[] = [];
    const key = this.serviceSelctGroup.value;
    const name = this.serviceSelctGroup.value;
    const dateCreated = new Date();
    this.dynamicForms.map((each, idx) => {
      if (this.totalQuestions[idx].key === 'date') {
        date = this.dynamicForms[idx].value;
      } else {
        questions.push({
          questionKey: this.totalQuestions[idx].key,
          value: this.dynamicForms[idx].value,
        });
      }
    });
    date = date;
    questions = questions;

    console.log(date);

    this.store.dispatch({
      type: 'ADD_REQUEST',
      payload: {
        key,
        name,
        date,
        serviceKey: 'serviceKey',
        userUid: 'userUid',
        questions,
        dateCreated,
      }
    });

    this.firebaseService.saveEventRequests({
      key,
      name,
      date,
      serviceKey: 'serviceKey',
      userUid: 'userUid',
      questions,
      dateCreated,
    });

    this.dialogRef.close();
  }
}
