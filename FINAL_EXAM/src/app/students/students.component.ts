import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  showForm: boolean = false;
  isEditMode: boolean = false;
  formData: any = {};

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data.students;
    });
  }

  showCreateForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {};
  }

  showUpdateForm(student: any) {
    this.showForm = true;
    this.isEditMode = true;
    this.formData = { ...student };
  }

  submitForm() {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.formData.id, this.formData).subscribe(() => {
        this.loadStudents();
        this.cancelForm();
      });
    } else {
      this.studentService.createStudent(this.formData).subscribe(() => {
        this.loadStudents();
        this.cancelForm();
      });
    }
  }

  cancelForm() {
    this.showForm = false;
    this.formData = {};
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }
}
