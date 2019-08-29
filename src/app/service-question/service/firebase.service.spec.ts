import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FirebaseModule } from 'src/app/unit-testing';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FirebaseModule
    ],
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
