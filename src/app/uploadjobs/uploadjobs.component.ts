import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-uploadjobs',
  templateUrl: './uploadjobs.component.html',
  styleUrls: ['./uploadjobs.component.css']
})
export class UploadjobsComponent implements OnInit {

  constructor(private post: PostService, 
    private router:Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }
product: any;
  prodnum: any;
prodname: any; 
prodbrand: any;

  onConfirm(content:any,pid:any,pname:any,brand: any){
    this.prodnum = pid;
    this.prodname = pname;
    this.prodbrand = brand;
    this.modalService.open(content).result.then((result)=>{
      if(result==1){
        this.onDelete();
      }
    });
  }
  
  onDelete(){
    this.post.delProduct(this.prodnum).subscribe((result:any)=>{
      this.product = result;
    })
  }

}
