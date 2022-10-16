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

  getData2(pid:any){
    return this.http.post(this.url + "getimages.php",JSON.stringify(pid));
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

  getPostedJobs() {
    return this.http.get(this.url + 'jobs.php');
  }

  oneEmployee(eid:any){
    return this.http.get(this.url + 'oneEmployee.php?eid=' + eid);
  }

  getJob(eid:any){
    return this.http.get(this.url + 'jobDisplay.php?eid=' + eid);
  }

  oneJob(jid:any){
    return this.http.get(this.url + 'oneJob.php?jid=' + jid);
  }

  oneJobs(id:any){
    return this.http.get(this.url + 'oneJobUpdate.php?jid=' + id);
  }


  updateFunct(emp: any){
    return this.http.post(this.url + 'updateEmp.php',JSON.stringify(emp));
  }

  updateJob(job: any){
    return this.http.post(this.url + 'updateJob.php',JSON.stringify(job));
  }

  delProduct(eid: any){
    return this.http.delete(this.url + "deleteemployer.php?eid="+eid);
  }

  delJobs(eid: any){
    return this.http.delete(this.url + "deletejobs.php?eid="+eid);
  }

  updateStatus(eid: any){
    return this.http.delete(this.url + "updateStatus.php?eid="+eid);
  }

}
