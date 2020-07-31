import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SharedService } from '@app/shared/services/shared.service';

import { ConfirmDialougComponent } from './confirm-dialoug.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor (private service: SharedService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  onSubmit (queryform: NgForm) {
    this.service.submitQuery(queryform.value)
      .then((docRef) => {
        const dialogRef = this.dialog.open(ConfirmDialougComponent, {
          width: '40vw',
          data: { message: 'Query submitted successfully!!', btnColor: 'primary', btnMessage: 'Ok' }
        });
        queryform.resetForm();
      })
      .catch((error) => {
        const dialogRef = this.dialog.open(ConfirmDialougComponent, {
          width: '40vw',
          data: { message: 'Couldn\'t submit query now!!', btnColor: 'warm', btnMessage: 'Ok' }
        });
        queryform.resetForm();
      });
  }

}
