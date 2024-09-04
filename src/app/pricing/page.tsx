"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  service: string,
  subServices: { subServiceId: number; subService: string; price: string }[]
) {
  return {
    
    service,
    totalSubService:subServices.length,
    subService:subServices,
  }
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
   
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton className='text-iconBg dark:text-gray-300'
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className='text-iconBg dark:text-gray-400' component="th" scope="row">
          {row.service}
        </TableCell>
        <TableCell className='text-iconBg dark:text-gray-400' align="right">{row.totalSubService}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className='border-b border-secBackground  dark:border-none' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className='border-b border-header dark:border-gray-900'  sx={{ margin: 1 }}>
              <Typography className='text-header dark:text-gray-300' variant="h6" gutterBottom component="div">
                Detail of the services
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead className='' >
                  <TableRow className='border border-header  dark:border-none' >
                  <TableCell  className='text-iconBg font-headingFont font-bold dark:text-gray-400'>S.No</TableCell>
                    <TableCell  className='text-iconBg font-headingFont font-bold dark:text-gray-400'>Sub Service</TableCell>
                 
                    <TableCell  className='text-iconBg font-headingFont font-bold dark:text-gray-400 ' align="right">Amount</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody className='border border-header  dark:border-none' >
                  {row.subService.map((sebServiceRow) => (
                    <TableRow className='border border-header dark:border-none dark:text-gray-500' key={sebServiceRow.subService}>
                       <TableCell className='text-header font-subheadingFont dark:text-gray-500 '>{sebServiceRow.subServiceId}</TableCell>
                        <TableCell className='text-header font-subheadingFont dark:text-gray-500 ' component="th" scope="row">
                            {sebServiceRow.subService}
                        </TableCell>
                     
                      <TableCell className='text-header font-subheadingFont dark:text-gray-500 ' align="right">{sebServiceRow.price}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
    </>
  );
}
// Sample Data with Different Sub-Services
const rows = [
    createData(' Hair Cut & Style', [
      { subServiceId: 1, subService: 'Ladies Hair Cut', price: "800/1000"  },
      { subServiceId: 2, subService: 'Gents Hair Cut', price: "400/450" },
      { subServiceId: 3, subService: 'Child Hair Cut', price: "200/250" },
      { subServiceId: 4, subService: 'Loreal Hair Spa', price: "1500" },
        { subServiceId: 5, subService: 'Moroccan Hair Spa', price: "2000" },
        { subServiceId: 6, subService: 'Root Touch Up', price: "1500/1800" },
        { subServiceId: 7, subService: 'Biotop Treatment', price: "2500" },
        { subServiceId: 8, subService: 'Root Deep Treatment', price: "2500" },
        { subServiceId: 9, subService: 'Hair Extension', price: "15000" },
        { subServiceId: 10, subService: 'Eyelash Extension', price: "3500" },
    ]),
    createData('Chemical Services', [
        { subServiceId: 1, subService: 'Global Hair Color(Gents)', price: "1499/1799"  },
        { subServiceId: 2, subService: 'Global Hair Color(Ladies)', price: "2499/2999"  },
        { subServiceId: 3, subService: 'Balayage', price: "4999"  },
        { subServiceId: 4, subService: 'Ombre', price: "5444"  },
        { subServiceId: 5, subService: 'Keratein Treatment Starting', price: "4000"  },
        { subServiceId: 6, subService: 'Botox Starting', price: "800/5000"  },
        

    ]),
    createData(' Facial and Waxing', [
        { subServiceId: 1, subService: 'Basic Facial Starting', price: "700" },
        { subServiceId: 2, subService: 'Premium Facial Starting', price: "1500" },
        { subServiceId: 3, subService: 'Face Detan', price: "500" },
        { subServiceId: 4, subService: 'Jennot Facial', price: "400" },
        { subServiceId: 5, subService: 'Face Cleanup', price: "1000/1500/2000" },
        { subServiceId: 6, subService: 'Honey Hand Wax', price: "500" },
        { subServiceId: 7, subService: 'Leg Half/Full Wax', price: "550/700" },
        { subServiceId: 8, subService: 'Under Arm Wax(Both)', price: "150" },
        { subServiceId: 9, subService: 'Rice Hand Wax', price: "700" },
        


    ]),
    createData('Nails', [
        { subServiceId: 1, subService: 'Nail Gel Paints', price: "600"  },
        { subServiceId: 2, subService: 'Nail Extension)', price: "2000"  },
        { subServiceId: 3, subService: 'Nail Refilling', price: "1200"  },
        { subServiceId: 4, subService: 'French Nail Refilling', price: "1500"  },
        { subServiceId: 5, subService: 'Overlay', price: "900"  },
        { subServiceId: 6, subService: 'Glitter Half', price: "300"  },
        { subServiceId: 7, subService: 'Glitter Full', price: "500"  },
        { subServiceId: 8, subService: 'Chroma', price: "600"  },
        { subServiceId: 9, subService: 'Stone Per piece', price: "20"  },
        { subServiceId: 10, subService: 'Nail Brush Art Per FInger', price: "150"  },
        { subServiceId: 11, subService: 'Tape Line Per Finger', price: "15"  },
        { subServiceId: 12, subService: 'Ombre', price: "500"  },
        { subServiceId: 13, subService: 'Cateye', price: "200"  },
        { subServiceId: 14, subService: 'Removal', price: "500"  },
        

    ]),
    createData('Pedicure & Manicure', [
      { subServiceId: 1, subService: 'Pedicure', price: "700/900/1200/1500" },
        { subServiceId: 2, subService: 'Manicure', price: "600/800/1100/1300" },
        { subServiceId: 3, subService: 'Hand Polishing(Both Hands) ', price: "700" },
        { subServiceId: 4, subService: 'Leg Polishing', price: "1000/1500" },
        { subServiceId: 5, subService: 'Body Polishing', price: "2500/3500" },
        { subServiceId: 6, subService: 'Body Massage', price: "1000/2000" },
      
    ]),
    createData('Makeup', [
        { subServiceId: 1, subService: 'Bridal Makeup Starting', price: "5000" },
          { subServiceId: 2, subService: 'Groom Makeup Starting', price: "2500" },
          { subServiceId: 3, subService: 'Light Party Makeup ', price: "700" },
          { subServiceId: 4, subService: 'Haldi/Sangeet/Mehendi Makeup Starting', price: "1000" },
          { subServiceId: 5, subService: 'Eye Makeup', price: "250" },
          { subServiceId: 6, subService: 'Hair Do Starting', price: "700" },
          { subServiceId: 7, subService: 'Saree Drapping', price: "700/1000" },
        
      ]),
  ];


export default function Price() {
  return (
    <>
      <div className="mx-auto my-3 py-8 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto pt-12 lg:pt-4  max-w-xl pb-9 text-center">
          <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-background">
              Our Pricing
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
            Explore Our Pricing
          </h2>
        </div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',  
            width: '100%',      
            maxWidth: '100%', 
            zIndex: 10, 
            backgroundColor: '#FFF3EB', 
          }}
        >
          <TableContainer className='bg-background bg-gradient-to-br shadow-lg rounded-xl dark:from-zinc-900 dark:to-gray-900 border border-iconBg dark:border-gray-300' component={Paper} sx={{ maxWidth: '100%' , zIndex: 10 }}>
            <Table  aria-label="collapsible table">
              <TableHead className='bg-iconBg dark:bg-black' >
                <TableRow>
                  <TableCell />
                  <TableCell className='text-background  font-headingFont font-bold dark:text-gray-300 '>Service</TableCell>
                  <TableCell  className='text-background font-headingFont font-bold dark:text-gray-300' align="right">Total Sub-Services</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row   key={row.service} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
}
