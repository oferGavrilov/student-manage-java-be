import React, { useEffect, useState } from 'react'
import { studentService } from '../services/studentService'
import { Student } from '../model/student.model'
import StudentList from '../components/StudentList'

function Home() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    loadStudents()
  }, [])

  async function loadStudents() {
    try {
      const students = await studentService.getStudents()
      setStudents(students)
    } catch (err) {
      console.log('Error while loading students', err)
    }
  }
  return (
    <StudentList students={students}/>
  )
}

export default Home