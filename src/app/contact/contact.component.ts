import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactMethods = [
    {id: 1, name: 'email'},
    { id: 2, name: 'phone' },
    { id: 3, name: 'pussy' },
  ];

  ngOnInit() {
  }

  Submit(f){
    console.log(f);
  }
}
