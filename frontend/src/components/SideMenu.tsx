import { Drawer, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'

interface Props {
      isOpen:boolean
      setIsOpen:Function
}

export default function SideMenu({setIsOpen , isOpen}:Props) {

      return (
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                  <Box width='270px' textAlign='right' role='presentation'>
                        <Typography variant="h6" component='div' className="relative">
                              <CloseIcon className='absolute left-2 top-3 !text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
                              <ul className='flex flex-col main-text'>
                                    hello
                              </ul>
                        </Typography>
                  </Box>
            </Drawer>
      )
}