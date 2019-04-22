import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from '../../Services/Student/student.service';

@Component({
  selector: 'app-view-student-list',
  templateUrl: './view-student-list.component.html',
  styleUrls: ['./view-student-list.component.css']
})
export class ViewStudentListComponent implements OnInit {

  categories = [{id : '1', type : 'Domestic'}, {id : '2', type : 'International'}];

  students: Student[] = [];
  searchString: any;
  category = 'All';

  constructor(private studentService: StudentService) { }

  /**
   * Initialize the student list.
   */
  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  /**
   * Delete the student with provided identifier.
   * @param id Identifier of the student to be deleted.
   */
  deleteStudent(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');

    if (isDelete) {
      this.studentService.deleteStudent(id);
      this.students = this.studentService.getStudents();
    }
  }
}
