import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  posts: any[];
  
  constructor(private service: PostService) { 
   
  }

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value}
    input.value = '';

   this.service.createPost(post)
    .subscribe(response => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json())
    })

  }

  deletePost(post){
   this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    })
  }

}