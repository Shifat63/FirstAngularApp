import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-input-output-property',
  templateUrl: './component-input-output-property.component.html',
  styleUrls: ['./component-input-output-property.component.css']
})
export class ComponentInputOutputPropertyComponent implements OnInit {

  //emailOutsideBinder is the name used to bind value from outside to the variable emailInternalVariale. They both can be same as well.
  @Input('emailOutsideBinder') emailInternalVariale: string = "inside@example.com";
  @Output() enterPressedEvent = new EventEmitter();

  enterPressed(){
    console.log(this.emailInternalVariale);
    //This emit() method informs the outside that this event has happened.
    this.enterPressedEvent.emit(this.emailInternalVariale);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
