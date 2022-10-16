import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateComponent } from './update/update.component';
import { EmployeesComponent } from './employees/employees.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { UploadprofileComponent } from './uploadprofile/uploadprofile.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { AddjobComponent } from './addjob/addjob.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { UploadjobimgComponent } from './uploadjobimg/uploadjobimg.component';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    JobsComponent,
    UpdateComponent,
    EmployeesComponent,
    UserloginComponent,
    FeedbacksComponent,
    DashboardComponent,
    HomepageComponent,
    UpdatejobComponent,
    UploadprofileComponent,
    ViewjobsComponent,
    PagecontentComponent,
    AddjobComponent,
    JobpostComponent,
    UploadjobimgComponent,
    ApplyjobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
