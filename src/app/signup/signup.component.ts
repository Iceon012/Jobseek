import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Gender : any = ['Male','Female']

  updateForm = new FormGroup({
    id_num: new FormControl(this),
    ulname: new FormControl(null),
    ufirstname: new FormControl(null),
    umiddle: new FormControl(null),
    ubdate: new FormControl(null),
    ugen: new FormControl(null),
    uaddress: new FormControl(null),
    ucontact: new FormControl(null),
  })

  constructor(
    private activeroute: ActivatedRoute,
    private post: PostService,
    private route: Router,
    ) { }

  empid: any;
  employee: any;
  ugender: any;

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(params =>{
      this.empid = params.get('eid');
      console.log(this.empid);
    })

    this.post.oneEmployee(this.empid).subscribe((result:any)=>{
      this.employee = result;

      console.log(this.employee);

      this.updateForm.controls['ulname'].setValue(this.employee[0].lname);
      this.updateForm.controls['ufirstname'].setValue(this.employee[0].fname);
      this.updateForm.controls['umiddle'].setValue(this.employee[0].middle);
      this.updateForm.controls['ubdate'].setValue(this.employee[0].bdate);
      this.updateForm.controls['ugen'].setValue(this.employee[0].gender);
      this.updateForm.controls['uaddress'].setValue(this.employee[0].address);
      this.updateForm.controls['ucontact'].setValue(this.employee[0].contact);
      this.updateForm.controls['id_num'].setValue(this.empid);
      this.ugender = this.employee[0].gender;
    })
  }

  updateFunct(){
    this.post.updateFunct(this.updateForm.value)
    .subscribe((result:any)=>{
       if(result=="ok"){
        this.route.navigate(['/employer']);
       }
      })
  }
}
