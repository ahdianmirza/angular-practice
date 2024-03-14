import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Angular15Service } from 'src/app/angular15.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  details: any;
  userId: any;
  studentInfo: any = [];
  editMode: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    private _service: Angular15Service
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      this.userId = data.get('id');
      this._service.getStudentDetails().subscribe(detail => {
        this.studentInfo = detail;
        this.details = this.studentInfo.find((info: any) => info.userId == this.userId);
      });
    });

    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));
    this.activatedRoute.queryParamMap.subscribe(data => {
      this.editMode = Boolean(data.get('edit'));
    })
  }
}
