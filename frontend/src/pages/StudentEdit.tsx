import { Theme } from '@emotion/react'
import { makeStyles, createStyles, TextField, Box, Container, Paper, Button } from '@mui/material'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { studentService } from '../services/studentService'




function StudentEdit() {
      const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
      const [student, setStudent] = useState({ name: '', address: '' })

      function handleChange(ev: ChangeEvent<HTMLInputElement>) {
            const { name, value } = ev.target
            setStudent({ ...student, [name]: value })
      }

      async function onEditStudent(ev: FormEvent<HTMLFormElement>) {
            ev.preventDefault()
            await studentService.addStudent(student)
            console.log('Student added successfully')
      }

      return (

            <Container>
                  <Paper elevation={3} style={paperStyle}>
                        <h2 className='text-blue-600 pb-4 font-bold text-2xl text-center'>Add Student</h2>
                        <form onSubmit={(ev) => onEditStudent(ev)} className='flex flex-col gap-3' autoComplete="off">
                              <TextField id="outlined-basic" label="Student Name" name='name' value={student.name} onChange={handleChange} variant="outlined" />
                              <TextField id="outlined-basic" label="Student Address" name='address' value={student.address} onChange={handleChange} variant="outlined" />
                              <Button type='submit' disabled={!(student.address && student.name)} variant='contained' className='w-28 self-center' color='info'>Save</Button>
                        </form>
                  </Paper>
            </Container >
      )
}

export default StudentEdit