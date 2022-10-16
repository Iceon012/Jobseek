import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit {

  FeedbackForm= new FormGroup({
    feedname: new FormControl(null),
    feedmsg: new FormControl(null)
  })



  divshowfeed = false;
  posted: any;

  constructor(private feed: PostService, private post: PostService) { }

  ngOnInit(): void {
    this.post.getPostedJobs().subscribe((result:any)=>{
      console.log(result)
      this.posted = result;
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