import React from 'react'
import { Student } from '../model/student.model'
import { Card, Grid, Paper } from '@mui/material'

interface Props {
      student: Student
}

function StudentPreview({ student }: Props) {
      return (
            <Card className='flex flex-col  border border-b-2 px-6 py-4 font-mono text-lg'>
                  <span>
                        <span className='text-blue-400 font-bold'>Student Name: </span>
                        {student.name}
                  </span>
                  <span>
                        <span className='text-blue-400 font-bold'>Student Address: </span>
                        {student.address}
                  </span>
            </Card>
      )
}

export default StudentPreview