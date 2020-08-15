

import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

import { PostService } from '../post.service';


@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  constructor(private data: PostService) { }

  blogPosts: Array<BlogPost>;
  private posts;

  ngOnInit(): void {

    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));

  }

}



