import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  post: any[];

  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.post = response.json();
    })
  }

  ngOnInit() {
  }

}
