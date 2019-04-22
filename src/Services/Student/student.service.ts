import { Injectable } from '@angular/core';

export interface Student {
  identifier: number;
  name: string;
  category: number;
  domicile: boolean;
  birthCertificate: boolean;
  markSheets: boolean;
  policeClearance: boolean;
  passport: boolean;
  declaration: boolean;
  fatherName: string;
  motherName: string;
  lastClassScore: string;
}

const studentListKey = 'students';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  /**
   * Initialize the student list in local storage as an empty list if it doesn't a;ready exists.
   */
  constructor() {
    let studentList = JSON.parse(localStorage.getItem(studentListKey));

    if (studentList == null || studentList === undefined) {
      studentList = [];
    }

    localStorage.setItem(studentListKey, JSON.stringify(studentList));
  }

  /**
   * Returns the list of students on board.
   */
  getStudents() {
    return JSON.parse(localStorage.getItem(studentListKey));
  }

  /**
   * Registers a new student.
   * @param student The new student object to be registered.
   */
  onBoardStudent(student: Student) {
    const studentList = JSON.parse(localStorage.getItem('students'));

    // If identifier has a valid value, that means student is already on board.
    // In this case just update the student details.
    if (student.identifier != null && student.identifier !== undefined && student.identifier !== 0) {
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].identifier === student.identifier) {
          studentList[i] = student;
          localStorage.setItem(studentListKey, JSON.stringify(studentList));
          break;
        }
      }
    } else {
      // Save the new student details.
      // Create a unique identifier for the student.
      student.identifier = Date.now();
      studentList[studentList.length] = student;
      console.log(studentList);
      localStorage.setItem(studentListKey, JSON.stringify(studentList));
    }
  }

  /**
   * Delete the student from the list.
   * @param id Identifier of the student to be deleted.
   */
  deleteStudent(id: number) {
    let studentList: Student[];
    if (id !== null && id !== undefined) {
      studentList = JSON.parse(localStorage.getItem(studentListKey));

      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].identifier === id) {
          studentList.splice(i, 1);
          localStorage.setItem(studentListKey, JSON.stringify(studentList));
          break;
        }
      }
    }
  }

  /**
   * Returns the student for provided identiier.
   * @param id The identifier of the required student.
   */
  getStudent(id: number) {
    let studentList: Student[];
    if (id != null || id !== undefined) {
      studentList = JSON.parse(localStorage.getItem('students'));

      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].identifier === id) {
          return studentList[i];
        }
      }
    }
  }
}
