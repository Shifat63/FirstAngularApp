import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  emailOutside:string = "outside@example.com";

  enterPressedEventHandler(email:string){
    console.log("Enter pressed. From outside we get email: "+email);
  }
}
