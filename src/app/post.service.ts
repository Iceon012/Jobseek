import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost/Jobseek/';

  constructor(private http: HttpClient) { }

  SaveFunct(sign:any){
    return this.http.post(this.url + 'signup.php',JSON.stringify(sign));
  }

  SaveJobs(jobs:any){
    return this.http.post(this.url + 'jobencode.php',JSON.stringify(jobs));
  }

  SaveFeed(feed:any){
    return this.http.post(this.url + 'feedbacks.php',JSON.stringify(feed));
  }

  userloginFunct(log: any) {
    return this.http.post(this.url + 'userlogin.php', JSON.stringify(log));
  }

  loginFunct(log: any) {
    return this.http.post(this.url + 'login.php', JSON.stringify(log));
  }

  getData() {
    return this.http.get(this.url + 'display.php');
  }

  getDataJob() {
    return this.http.get(this.url + 'jobDisplay.php');
  }

  getDataUser() {
    return this.http.get(this.url + 'userdisplay.php');
  }
  
  getFeed() {
    return this.http.get(this.url + 'feedmsg.php');
  }

  oneEmployee(eid:any){
    return this.http.get(this.url + 'oneEmployee.php?eid=' + eid);
  }

  oneJob(eid:any){
    return this.http.get(this.url + 'jobDisplay.php?eid=' + eid);
  }

  updateFunct(emp: any){
    return this.http.post(this.url + 'updateEmp.php',JSON.stringify(emp));
  }
  delProduct(eid: any){
    return this.http.delete(this.url + "deleteemployer.php?eid="+eid);
  }
}
