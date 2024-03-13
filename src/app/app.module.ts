import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MouseHoverDirective } from './directive/mouse-hover.directive';
import { StudentStandAloneComponent } from './student-stand-alone/student-stand-alone.component';
import {FormsModule} from '@angular/forms';
import { MultiplicationPipe } from './multiplication.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, TeacherComponent, MultiplicationPipe, PageNotFoundComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MouseHoverDirective,
    MatListModule,
    StudentStandAloneComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
