import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  employer = {empid:localStorage.getItem("jid")};
  employerdata: any;

  jobCategory : any = ['Job Level', 'Rookie','Manager']
  jobType : any = ['Job Type' ,'Graphics & Design','Digital Marketing']

  jobForm = new FormGroup({
    empid: new FormControl(this),
    jTitle: new FormControl(null),
    jType: new FormControl(null),
    jcat: new FormControl(null),
    jSalary: new FormControl(null),
    jobDesc: new FormControl(null)
  })

  constructor(private post: PostService,private activeroute: ActivatedRoute,
    private route: Router) { }

    SaveJobs(){
      console.log(this.employerdata);
      console.log(this.jobForm.value);
      this.post.SaveJobs(this.jobForm.value).subscribe((result:any)=>
      {
        console.log(result)
        // if(result != null){
        //   this.divshowsuccess = !this.divshowsuccess;
        // }
      })
    }
  jobid: any;

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(params =>{
      this.jobid = params.get('jid');
      console.log(this.jobid);
    })
  }

}
