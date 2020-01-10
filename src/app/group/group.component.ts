import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent  {
form = new FormGroup({
  topics: new FormArray([])
});
  
addTopic(topic: HTMLInputElement) {
this.topics.push(new FormControl(topic.value));
topic.value='';
}

get topics(){
  return this.form.get('topics') as FormArray;
}

removeTopic(topic: FormControl) {
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}
}
