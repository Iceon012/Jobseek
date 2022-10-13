import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  feed: any;
  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.post.getFeed().subscribe((result:any)=>{
      console.log(result)
      this.feed = result;
    });
  }

}
