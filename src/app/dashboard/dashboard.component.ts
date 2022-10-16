import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employer: any;
  user: any;

  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.post.getData().subscribe((result:any)=>{
      console.log(result)
      this.employer = result;
    });

    this.post.getDataUser().subscribe((result:any)=>{
      console.log(result)
      this.user = result;
    });
  }

}
