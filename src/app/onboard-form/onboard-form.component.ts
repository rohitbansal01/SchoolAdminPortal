import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';

import {
  Validators,
  FormGroup,
  FormBuilder, FormControl,
} from '@angular/forms';
import {StudentService, Student} from '../../Services/Student/student.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

const idParam = 'id';
const editParam = 'edit';

@Component({
  selector: 'app-onboard-form',
  templateUrl: './onboard-form.component.html',
  styleUrls: ['./onboard-form.component.css']
})

export class OnboardFormComponent implements OnInit, DoCheck {

  categories = [{id : '1', type : 'Domestic'}, {id : '2', type : 'International'}];

  onBoardForm: FormGroup;
  private id: any;
  private student: Student;

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
    // Initialize the form.
    this.onBoardForm = this.fb.group({
      identifier: 0,
      name: ['', Validators.required],
      category: ['', Validators.required],
      domicile: false,
      birthCertificate: false,
      markSheets: false,
      policeClearance: false,
      passport: false,
      declaration: false,
      dob: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      lastClassScore: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit() {

    // Capture the query parameter.
    // If query parameter has a valid value, form should be opened in edit and view mode
    // and student properties should be pre populated.
    this.id = +this.route.snapshot.queryParams[idParam];

    // Check if form should be opened in edit mode or view mode.
    const editMode = this.route.snapshot.queryParams[editParam];

    // If form is in edit or view mode, fetch the student details from service.
    if (this.id != null && this.id !== undefined && !isNaN(this.id)) {
      this.student = this.studentService.getStudent(this.id);
      this.onBoardForm.setValue(this.student);
    }

    // If form is in view mode, disable the form.
    if (editMode !== null && editMode !== undefined && editMode === 'false') {
      this.onBoardForm.disable();
    }
  }

  ngDoCheck(): void {
  }

  /**
   * On board a new student.
   */
  onBoard() {
    const studentToSave = this.onBoardForm.getRawValue();

    // If student object is not null, it means form is opened in edit mode and student
    // already exists in the DB.
    if (this.student !== null && this.student !== undefined) {
      studentToSave.identifier = this.student.identifier;
    }

    this.studentService.onBoardStudent(studentToSave);

    // Reset the parameters.
    this.onBoardForm.reset();
    this.id = null;
    this.student = null;

    // Route to view component.
    this.router.navigate(['./portal/view']);
  }
}
