import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth.service';
import { ToastService } from 'src/app/common/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({});

  constructor(private toastService:ToastService,private formBuilder: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.authenticateUser(this.loginForm.value).subscribe(data=>{
      this.route.navigateByUrl('/home');
    },
    (error)=>{
      this.toastService.show('please enter valid details!', { classname: 'bg-danger text-light', delay: 15000 });
    }
    )
  }
}
