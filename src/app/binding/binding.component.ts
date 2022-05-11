import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title:string = "This is the title";
  tableColspan:number = 2;
  isActive: boolean = false;
  email = "abc@example.com";

  enterPressed(){
    console.log(this.email);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
