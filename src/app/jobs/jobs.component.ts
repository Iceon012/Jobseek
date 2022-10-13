import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  employer = {idno:localStorage.getItem("idno")};
  emp: any;
  job:any;
  
  constructor(
    private post: PostService,
    ) { }

  // divupdate:any;

  ngOnInit(): void {
    this.post.oneEmployee(this.employer.idno).subscribe((result:any) => {
      this.emp = result;
      console.log(this.emp[0].idno);
    })
    this.post.oneJob(this.employer.idno).subscribe((result:any) => {
      this.job = result;
      console.log(this.job[0].idno);
    })
  }

}
