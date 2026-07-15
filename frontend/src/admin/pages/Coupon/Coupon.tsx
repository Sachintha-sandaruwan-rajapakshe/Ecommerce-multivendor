import { Delete } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, type SelectChangeEvent } from '@mui/material';
import React from 'react'

const status =[
  {name:"In active",value:"IN_ACTIVE",description:"Cupon is used"},
  {name:"Active",value:"ACTIVE",description:"Cupon is active"},
]

const Coupon = () => {

  const [couponStatus, setCouponStatus] = React.useState('ACTIVE');

  const handleChange = (event: SelectChangeEvent) => {
    setCouponStatus(event.target.value as string);
  };

  const handleDelete=(id:number)=>{
    console.log(id);
  }

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
  id:number,
  sellername: string,
  email: string,
  mobile: string,
  GSTIN: string,
  businessName: string,
  AccountStatus:string,
  changeStatus:string,
) {
  return {id, sellername, email, mobile, GSTIN, businessName,AccountStatus,changeStatus,
 };
}

const rows = [
  createData(1,'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
  createData(2,'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
  createData(3,'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt','Frozen yoghurt','Frozen yoghurt'),
];



  return (
    <div className='space-y-10'>
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width:250 }}>
        <InputLabel id="status">Account Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={couponStatus}
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
            <StyledTableCell>Coupon Code</StyledTableCell>
            <StyledTableCell>Start Date</StyledTableCell>
            <StyledTableCell>End Date</StyledTableCell>
            <StyledTableCell>Min/ order value</StyledTableCell>
            <StyledTableCell>Discount %</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.sellername}
              </StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
              <StyledTableCell>{row.GSTIN}</StyledTableCell>
              <StyledTableCell>{row.businessName}</StyledTableCell>
              <StyledTableCell>{row.AccountStatus}</StyledTableCell>
              <StyledTableCell>
                <IconButton className='!text-red-700' onClick={()=>handleDelete(row.id)}>
                  <Delete/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>
  )
}

export default Coupon
