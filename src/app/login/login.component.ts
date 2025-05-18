import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin !: FormGroup;
  private data !: string;

  constructor(private fb : FormBuilder, private authService : AuthService,private router : Router) {
  }
  ngOnInit() {
      this.formLogin = this.fb.group({
        username: this.fb.control(""),
        password: this.fb.control("")
      });
    }
  handleLogin(){
    console.log(this.formLogin.value);
    this.authService.login(this.formLogin.value.username, this.formLogin.value.password).subscribe({
      next : data =>{
        this.authService.loadProfile(data)
        this.router.navigateByUrl("/admin")
        console.log(this.data)

      },
      error : err =>{
        console.log(err);
      }
    });
  }

}
