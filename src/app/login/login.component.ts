import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Gender : any = ['Male','Female']

  signupForm = new FormGroup({
    lastname: new FormControl(null),
    firstname: new FormControl(null),
    middle: new FormControl(null),
    bdate: new FormControl(null),
    gen: new FormControl(null),
    address: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    contact: new FormControl(null)
  })

  loginForm = new FormGroup({
    email : new FormControl(null),
    pass : new FormControl(null)
  })

  divshow = false;

  constructor(private posting: PostService ,private post: PostService, private route:Router) { }

  ngOnInit(): void {
  }

  SaveFunct(){
    console.log(this.signupForm.value);
    this.post.SaveFunct(this.signupForm.value).subscribe((result:any)=>
    {
      console.log(result)
    })
  }

  loginFunct(){
    this.posting.loginFunct(this.loginForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        localStorage.setItem("idno",result);
        this.route.navigate(['/employer']);
      }else{
        this.divshow = !this.divshow;
      }
    });
  }
}
