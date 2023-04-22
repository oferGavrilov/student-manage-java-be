
import axios from "axios";
import { Student } from "../model/student.model";

export const studentService = {
      addStudent,
      getStudents
}

const API_URL = 'http://localhost:8080/student'

async function getStudents() {
      try {
            return (await axios.get(`${API_URL}/getAll`)).data
      } catch (err) {
            throw err
      }
}

function addStudent(student: Student) {
      try {
            return axios.post(`${API_URL}/add`, student)
      } catch (err) {
            throw err
      }
}