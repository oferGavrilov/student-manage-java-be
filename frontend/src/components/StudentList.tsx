import { Grid } from '@mui/material'
import { Student } from '../model/student.model'
import StudentPreview from './StudentPreview'

interface Props {
      students: Student[]
}

function StudentList({ students }: Props) {

      return (
            <ul className=' mt-6 w-[90vw] mx-auto gap-4 flex flex-col align-middle'>
                  {students.map(student => <StudentPreview key={student.id} student={student}/>)}
            </ul>
      )
}

export default StudentList