import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {

  ujobCategory : any = ['Job Level', 'Rookie','Manager']
  ujobType : any = ['Job Type' ,'Graphics & Design','Digital Marketing']

  ujobForm = new FormGroup({
    job_id: new FormControl(this),
    ujTitle: new FormControl(null),
    ujType: new FormControl(null),
    ujLevel: new FormControl(null),
    ujSalary: new FormControl(null),
    ujDesc: new FormControl(null)
  })

  constructor(private activeroute: ActivatedRoute,
    private post: PostService, private route: Router) { }

  jobid:any;
  job:any;

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(params =>{
      this.jobid = params.get('jid');
      console.log(this.jobid);
    })

    this.post.oneJobs(this.jobid).subscribe((result:any)=>{
      this.job = result;

      console.log(this.job);
      
      this.ujobForm.controls['ujTitle'].setValue(this.job[0].job_title);
      this.ujobForm.controls['ujType'].setValue(this.job[0].job_type);
      this.ujobForm.controls['ujLevel'].setValue(this.job[0].job_level);
      this.ujobForm.controls['ujSalary'].setValue(this.job[0].job_salary);
      this.ujobForm.controls['ujDesc'].setValue(this.job[0].job_description);
      this.ujobForm.controls['job_id'].setValue(this.jobid);
    })
  }
  divupdate:any;

  onUpdate(){
    this.post.updateJob(this.ujobForm.value)
      .subscribe((result:any)=>{
       if(result=="ok"){
        this.divupdate = !this.divupdate;
       }
      })
  }

}
