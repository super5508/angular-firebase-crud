import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Service, EventRequest } from 'src/app/models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFireDatabase,
    private store: AngularFirestore
  ) {}

  getServices(): Observable<any[]> {
    return this.db.list('/services').valueChanges();
  }

  getQuestions(key: string): Observable<any[]> {
    return this.db.list('/questions/' + key).valueChanges();
  }

  saveEventRequests(data: any) {
    return this.store.collection('events').add({
      key: data.key,
      name: data.name,
      date: data.date,
      serviceKey: data.serviceKey,
      userUid: data.userUid,
      questions: data.questions,
      dateCreated: data.dateCreated
    });
  }
}
