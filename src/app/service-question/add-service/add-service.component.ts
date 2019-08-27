import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fireBase: AngularFirestore
  ) { }

  ngOnInit() {

  }

  addService() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
