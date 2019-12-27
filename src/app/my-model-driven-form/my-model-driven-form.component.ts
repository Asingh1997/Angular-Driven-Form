import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'model-driven-form',
  templateUrl: './my-model-driven-form.component.html',
  styleUrls: ['./my-model-driven-form.component.css']
})
export class MyModelDrivenFormComponent implements OnInit {

   emailid;
   formdata;
  constructor() { }

  ngOnInit() {
   this.formdata = new FormGroup({
         emailid: new FormControl(""),
         passwd: new FormControl("")
      });
  }
   onClickSubmit(data) {this.emailid = data.emailid;}
   
}

