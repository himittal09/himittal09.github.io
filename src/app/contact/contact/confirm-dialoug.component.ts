import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialoug',
  template: `
    <div mat-dialog-content class="mat-h2">{{data.message}}</div>
    <div mat-dialog-actions class="actions">
      <button type="button" mat-raised-button mat-dialog-close cdkFocusInitial [color]="data.btnColor">{{data.btnMessage}}</button>
    </div>
  `,
  styles: [`
    .actions {
      float: right;
    }
  `]
})
export class ConfirmDialougComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmDialougComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { [key: string]: any }) { }

  closeDialoug () {
    this.dialogRef.close();
  }

}
