import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PostService } from 'src/app/common/services/post.service';
import { ToastService } from 'src/app/common/toast.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  blogPostForm: FormGroup;
  selectedFile: any;
  imageSrc: any;

  constructor(private toastService:ToastService, private router: Router, private formBuilder: FormBuilder, private postService: PostService) {
    this.blogPostForm = this.formBuilder.group({
      title: '',
      description: '',
      image: null
    });
  }
  onFileSelected(target: any) {
    const files = target.files;
    this.selectedFile = files.item(0);
    this.blogPostForm?.get('image')?.setValue(this.selectedFile);
    this.previewImage();
  }

  onSubmit() {
    console.log(this.blogPostForm.get('description')?.value)
    const formData = new FormData();
    formData.append('title', this.blogPostForm.get('title')?.value);
    formData.append('description', this.blogPostForm.get('description')?.value);
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.postService.createPost(formData).subscribe(data=>{
      this.router.navigate(['home']);
    },
    (error: ErrorEvent) => {
      const serverErrors: any = error.error.message;
      this.toastService.show(serverErrors, { classname: 'bg-danger text-light', delay: 15000 });
    }
    )
    // send formData to server for processing
  }
  previewImage() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }
    }

}
