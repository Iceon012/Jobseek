import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UploadjobimgComponent } from './uploadjobimg/uploadjobimg.component';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';




const routes: Routes = [
  {path: 'userlogin', component: UserloginComponent},
  {path: 'admin', component: AdminComponent,
    children: [{path: 'employees', component: EmployeesComponent},
               {path: 'dashboard', component: DashboardComponent},
               {path: 'update/:eid', component: UpdateComponent},
               {path: 'jobs/:jid', component: JobsComponent},
               {path: 'feedbacks', component: FeedbacksComponent},
    {path: '', redirectTo: '/admin/employees', pathMatch: 'full'}]
  },
  {path: 'login', component: LoginComponent},
  {path: 'employer', component: EmployerComponent},
  {path: 'addjob', component: AddjobComponent},
  {path: 'updatejob/:jid', component: UpdatejobComponent},
  {path: 'uploadjobimg', component: UploadjobimgComponent},
  {path: 'uploadprofile', component: UploadprofileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent,
    children: [{path: 'viewjobs', component: ViewjobsComponent},
    {path: 'pagecontent', component: PagecontentComponent},
    {path: 'applyjobs', component: ApplyjobsComponent},
    {path: '', redirectTo: '/home/pagecontent', pathMatch: 'full'}],
  },
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
