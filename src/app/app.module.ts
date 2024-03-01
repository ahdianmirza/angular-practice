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

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MouseHoverDirective,
    MatListModule,
    StudentStandAloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
