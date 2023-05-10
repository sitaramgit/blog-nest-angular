import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit{

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute){

  }
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    const id: any = params.get('id');
    this.getPostDetails(id);
    console.log(id); // do something with the id
  });
}

private getPostDetails(id: number){
this.postService.getPostById(id).subscribe(data=>{
  console.log(data);
});
}

}
