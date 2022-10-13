import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  FeedbackForm= new FormGroup({
    feedname: new FormControl(null),
    feedmsg: new FormControl(null)
  })

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

  divshowfeed = false;
  divshow = false;
  divshowsuccess = false;

  constructor(private feed: PostService, private posting: PostService ,private post: PostService,private route:Router) { }

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

  loginFunct(){
    this.posting.loginFunct(this.loginForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        this.route.navigate(['/employer']);
      }else{
        this.divshow = !this.divshow;
      }
    });
  }

  SaveFeed(): void{
    console.log(this.FeedbackForm.value);
    this.feed.SaveFeed(this.FeedbackForm.value).subscribe((result:any)=>
    {
      console.log(result)
      if(result == 'OK'){
        this.divshowfeed = !this.divshowfeed;
      }
    })
  }

}
