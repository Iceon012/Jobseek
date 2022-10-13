import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SeekerComponent } from './seeker/seeker.component';
import { SignupComponent } from './signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateComponent } from './update/update.component';
import { EmployeesComponent } from './employees/employees.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadjobsComponent } from './uploadjobs/uploadjobs.component';

const routes: Routes = [
  {path: 'userlogin', component: UserloginComponent},
  {path: 'admin', component: AdminComponent,
    children: [{path: 'employees', component: EmployeesComponent},
               {path: 'dashboard', component: DashboardComponent},
               {path: 'update/:eid', component: UpdateComponent},
               {path: 'jobs', component: JobsComponent},
               {path: 'feedbacks', component: FeedbacksComponent},
    {path: '', redirectTo: '/admin/employees', pathMatch: 'full'}]
  },
  {path: 'login', component: LoginComponent},
  {path: 'employer', component: EmployerComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'seeker', component: SeekerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'uploadjobs', component: UploadjobsComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
