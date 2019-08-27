import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageUtil } from 'src/app/utils';
import { StorageKey } from 'src/app/models';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {

  @Input() drawer: MatDrawer;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    StorageUtil.refresh(StorageKey.Token);
    this.router.navigate(['/auth/login']);
  }
}
