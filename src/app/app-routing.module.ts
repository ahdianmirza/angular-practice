import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  // {
  //   path: 'student/student-details/:id',
  //   component: StudentDetailsComponent,
  // },
  {
    path: 'student',
    children: [
      {path: 'student-details/:id', component: StudentDetailsComponent}
    ],
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    outlet: 'stdList'
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
