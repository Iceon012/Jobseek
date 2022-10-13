import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import { SeekerComponent } from './seeker/seeker.component';
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
import { UploadjobsComponent } from './uploadjobs/uploadjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployerComponent,
    SeekerComponent,
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
    UploadjobsComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
