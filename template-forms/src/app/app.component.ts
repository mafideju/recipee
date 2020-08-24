import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  email: string;
  
  ngOnInit() {
    console.log('NgModel',NgModel)
    console.log('NgForm', NgForm)
  }

  onSubmit() {
    console.log(this.email);
  }
}
