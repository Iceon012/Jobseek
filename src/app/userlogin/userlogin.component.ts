import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private posting: PostService ,private post: PostService, private route:Router) { }

  userloginForm = new FormGroup({
    email : new FormControl(null),
    pass : new FormControl(null)  
  })

  divshow = false;

  ngOnInit(): void {
  }

  userloginFunct(){
    this.posting.userloginFunct(this.userloginForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        this.route.navigate(['/admin']);
      }else{
        this.divshow = !this.divshow;
      }
    });
  }

}
