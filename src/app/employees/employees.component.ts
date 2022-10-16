import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private post: PostService,
    private route: Router, private modalService: NgbModal
    ) { }

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

  employer: any;
  corsid: any;
  employerId: any;


  ngOnInit(): void {
    this.post.getData().subscribe((result:any)=>{
      console.log(result)
      this.employer = result;
    });
  }

  id_no: any;
  Name: any;
  gen: any;

  onConfirm(content:any,eid:any,ename:any,egen: any){
    this.id_no = eid;
    this.Name = ename;
    this.gen = egen;
    this.modalService.open(content).result.then((result)=>{
      if(result==1){
        this.onDelete();
      }
    });
  }
  
  onDelete(){
    this.post.delProduct(this.id_no).subscribe((result:any)=>{
      this.employer= result;
    })
  }
}
