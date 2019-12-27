import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './my-template-driven-form.component.html',
  styleUrls: ['./my-template-driven-form.component.css']
})
export class MyTemplateDrivenFormComponent implements OnInit {

em="";
  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid);
     this.em = data.emailid
   }
 

}
