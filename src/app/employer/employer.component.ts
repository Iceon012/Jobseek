import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})


export class EmployerComponent implements OnInit {

  employer = {empid:localStorage.getItem("idno")};
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

  emp: any;
  job: any;

  constructor(private post: PostService,
    private route: Router, private modalService: NgbModal) { 
  }

   SaveJobs(){
     console.log(this.jobForm.value);
     this.post.SaveJobs(this.jobForm.value).subscribe((result:any)=>
     {
       console.log(result)
       if(result == "OK"){
        this.route.navigate(['/employer']);
        }
     })
   }

   job_id: any;
   job_title: any;

   onConfirm(content:any,jid:any, jtitle:any){
    this.job_id = jid;
    this.job_title = jtitle;
    this.modalService.open(content).result.then((result)=>{
      if(result==1){
        this.onDelete();
      }
    });
  }
  
  onDelete(){
    this.post.delProduct(this.job_id).subscribe((result:any)=>{
      this.employer= result;
    })
  }


  ngOnInit(){
    this.post.oneEmployee(this.employer.empid).subscribe((result:any)=>{
      this.employerdata = result;
      console.log(this.employerdata[0].id_no)

      this.jobForm.controls['empid'].setValue(this.employerdata[0].id_no);
    });

    this.post.getJob(this.employer.empid).subscribe((result:any) => {
      this.job = result;
      console.log(result);
    })
  }
}