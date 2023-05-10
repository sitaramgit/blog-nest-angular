import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/common/services/post.service';
import { ToastService } from 'src/app/common/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts:any = []; 
  constructor(
    private toastService: ToastService,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPostRecords();
  }
  public getPostRecords() {
    this.postService.getAllPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      },
      (error: ErrorHandler) => {
        console.log(error);
      }
    );
  };
}
