import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private post: PostService) { }

  user:any;
  
  ngOnInit(): void {
    this.post.getDataUser().subscribe((result:any)=>{
      console.log(result)
      this.user = result;
    });
  }

}
