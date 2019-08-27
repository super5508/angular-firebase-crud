import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { StorageUtil } from 'src/app/utils';
import { StorageKey } from 'src/app/models';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
  }

  login(data: { email: string, password: string }): Promise<boolean> {
    return this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      StorageUtil.set(StorageKey.Token, 'token');
      this.router.navigate(['/']);
      return true;
    })
    .catch(err => {
      throw err;
    });
  }

  signUp(data: { email: string, password: string }) {
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
      this.router.navigate(['/auth/login']);
    })
    .catch(err => {
      throw err;
    });
  }
}
