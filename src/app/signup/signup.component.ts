import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
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
  
  divshowsuccess = false;

  constructor(private post: PostService,) { }


  ngOnInit(): void {
  }

  SaveFunct(){
    console.log(this.signupForm.value);
    this.post.SaveFunct(this.signupForm.value).subscribe((result:any)=>
    {
      console.log(result)
      if(result != null){
        this.divshowsuccess = !this.divshowsuccess;
      }
    })
  }
}