import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  onNameChange(x: any){
    console.log(x);
    // console.log(x.value);
  }
  onSubmit(x:any){
    console.log(x);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
