import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: any;

  constructor(private blogService:BlogService, private meta:Meta) {
    this.meta.updateTag({ name : 'description', content: 'My blog where I cover ' +
      'topics ranging from programming to security'});
    this.meta.updateTag({ name : 'og:image', content: 'https://frichetten.com/images/home/profile.jpg'});
    this.meta.updateTag({ name : 'og:description', content: 'My blog where I cover ' +
      'topics ranging from programming to security'});
    this.meta.updateTag({ name : 'og:title', content: 'Blog'});
    this.meta.updateTag({ name : 'og:see_also', content: 'https://frichetten.com'});
    this.meta.updateTag({ name : 'twitter:title', content: 'Blog'});
    this.meta.updateTag({ name : 'twitter:description', content: 'My blog where I cover ' +
      'topics ranging from programming to security'});
    this.meta.updateTag({ name : 'twitter:image', content: 'https://frichetten.com/images/home/profile.jpg'});
  }

  ngOnInit() {
    this.blogService.listArticles().subscribe(info => {
      this.articles = info;
    });
  }

}