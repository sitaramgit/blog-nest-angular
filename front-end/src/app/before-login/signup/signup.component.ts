import { Component, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/common/auth.service';
import { ToastsContainer } from 'src/app/common/shared/toasts-container.component';
import { ToastService } from 'src/app/common/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private toastService:ToastService
  ) {
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.createUser(this.signUpForm.value).subscribe(
      (data) => {
        this.toastService.show('Registration succuss fully completed!', { classname: 'bg-success text-light', delay: 10000 });
        this.route.navigateByUrl('/login');
      },
      (err: any) => {
        const serverErrors: any = err.error.message;
        if(typeof serverErrors === 'string'){
          this.toastService.show(serverErrors, { classname: 'bg-danger text-light', delay: 15000 });
        }else{
          serverErrors.forEach((element: string) => {
            this.toastService.show(element, { classname: 'bg-danger text-light', delay: 15000 });
          });
        }
      }
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }
}
