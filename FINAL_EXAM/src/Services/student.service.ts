import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://httpbin.org/';

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(`${this.baseUrl}/students`);
  }

  getStudentById(id: number) {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  createStudent(student: any) {
    return this.http.post(`${this.baseUrl}/student`, student);
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.baseUrl}/student/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/student/${id}`);
  }
}
