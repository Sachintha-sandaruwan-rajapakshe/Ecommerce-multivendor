import { Box, FormControl, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, type SelectChangeEvent } from '@mui/material';
import React from 'react'

const status =[
  {name:"Pending Verification",value:"PENDING_VERIFICATION",description:"Account is pending"},
  {name:"Active",value:"ACTIVE"},
  {name:"Suspended",value:"SUSPENDED"},
  {name:"Deactivated",value:"DEACTIVATED"},
  {name:"Banned",value:"BANNED"},
  {name:"closed",value:"CLOSED"},
  
]

const SellerTable = () => {

  const [Accountstatus, setAccountStatus] = React.useState('ACTIVE');

  const handleChange = (event: SelectChangeEvent) => {
    setAccountStatus(event.target.value as string);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// interface Seller {
//   sellername: string;
//   email: string;
//   mobile: string;
//   GSTIN: string;
//   businessName: string;
//   AccountStatus: string;
//   changeStatus: string;
// }

// const [rows, setRows] = React.useState<Seller[]>([]);

// axios.get("/api/sellers")
//   .then((res) => {
//     setRows(res.data);
//   });

function createData(
  sellername: string,
  email: string,
  mobile: string,
  GSTIN: string,
  businessName: string,
  AccountStatus:string,
  changeStatus:string,
) {
  return { sellername, email, mobile, GSTIN, businessName,AccountStatus,changeStatus,
 };
}

const rows = [
  createData('Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
  createData('Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
  createData('Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
];

  return (
    <div className='space-y-10'>
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width:250 }}>
        <InputLabel id="status">Account Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={Accountstatus}
          label="Account Status"
          onChange={handleChange}
        >
          {status.map((item,index)=><MenuItem className={`${index % 2 === 1?"!bg-gray-100":""}`} value={item.value}>{item.name}</MenuItem>)} 
        </Select>
      </FormControl>
    </Box>

    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Seller Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Mobile</StyledTableCell>
            <StyledTableCell>GSTIN</StyledTableCell>
            <StyledTableCell>business Name</StyledTableCell>
            <StyledTableCell>Account Status</StyledTableCell>
            <StyledTableCell>Change Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sellername}>
              <StyledTableCell component="th" scope="row">
                {row.sellername}
              </StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
              <StyledTableCell>{row.GSTIN}</StyledTableCell>
              <StyledTableCell>{row.businessName}</StyledTableCell>
              <StyledTableCell>{row.AccountStatus}</StyledTableCell>
              <StyledTableCell>{row.changeStatus}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>
  )
}

export default SellerTable
