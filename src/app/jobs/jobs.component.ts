import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


  job:any;
  jobid: any;
  emp:any;
  job_id: any;
  job_title: any;
  
  constructor(
    private activeroute: ActivatedRoute,
    private route: Router,
    private post: PostService,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {

    this.activeroute.paramMap.subscribe(params =>{
      this.jobid = params.get('jid');
      console.log(this.jobid);
    })

    this.post.oneEmployee(this.jobid).subscribe((result:any) => {
      this.emp = result;
      console.log(this.emp);
    })
    this.post.oneJob(this.jobid).subscribe((result:any) => {
      this.job = result;
      console.log(result);
    })
  }

  showPending = false;

  onConfirm(content:any,jid:any, jtitle: any){
    this.job_id = jid;
    this.job_title = jtitle;

    this.modalService.open(content).result.then((result)=>{
      if(result == 1){
        this.onDelete();
      }
      if(result == 3) {
        this.onUpdate();
      }
    });
  }
  
  onDelete(){
    this.post.delJobs(this.job_id).subscribe((result:any)=>{
      this.job= result;
    })
  }
  onUpdate(){
    this.post.updateStatus(this.job_id).subscribe((result:any)=>{
      this.job= result;
      console.log(result);

    })
  }

}
