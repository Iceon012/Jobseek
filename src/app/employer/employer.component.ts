import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})


export class EmployerComponent implements OnInit {

  employer = {empid:localStorage.getItem("idno")};
  employerdata: any;

  jobCategory : any = ['Job Category', 'Social Media Marketing','Digital Marketing']
  jobType : any = ['Job Type' ,'Graphics & Design','Digital Marketing']

  jobForm = new FormGroup({
    empid: new FormControl(this),
    jTitle: new FormControl(null),
    jType: new FormControl(null),
    jcat: new FormControl(null),
    jSalary: new FormControl(null),
    jobDesc: new FormControl(null)
  })

  constructor(private post: PostService) { 
  }

   SaveJobs(){
     console.log(this.jobForm.value);
     this.post.SaveJobs(this.jobForm.value).subscribe((result:any)=>
     {
       console.log(result)
       // if(result != null){
       //   this.divshowsuccess = !this.divshowsuccess;
       // }
     })
   }

  ngOnInit(){
    this.post.oneEmployee(this.employer.empid).subscribe((result:any)=>{
      this.employerdata = result;
      console.log(this.employerdata[0].id_no)

      this.jobForm.controls['empid'].setValue(this.employerdata[0].id_no);
    });
  }
}