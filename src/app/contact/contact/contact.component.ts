import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor (private service: SharedService) { }

  ngOnInit(): void {
  }

  onSubmit (queryform: NgForm) {
    this.service.submitQuery(queryform.value)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    
    queryform.resetForm();
  }

}
