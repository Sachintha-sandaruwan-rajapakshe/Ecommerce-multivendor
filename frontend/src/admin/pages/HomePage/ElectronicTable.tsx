import { Edit } from '@mui/icons-material';
import { Box, Button, Dialog, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, type SelectChangeEvent } from '@mui/material';
import React from 'react'

const status = [
  { name: "Pending Verification", value: "PENDING_VERIFICATION", description: "Account is pending" },
  { name: "Active", value: "ACTIVE" },
  { name: "Suspended", value: "SUSPENDED" },
  { name: "Deactivated", value: "DEACTIVATED" },
  { name: "Banned", value: "BANNED" },
  { name: "closed", value: "CLOSED" },

]

const ElectronicTable = () => {

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);

  const handleClickOpen = (row: any) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    AccountStatus: string,
    changeStatus: string,
  ) {
    return {
      sellername, email, mobile, GSTIN, businessName, AccountStatus, changeStatus,
    };
  }

  const rows = [
    createData('Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt'),
    createData('Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt'),
    createData('Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt', 'Frozen yoghurt'),
  ];

  return (



    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>image</StyledTableCell>
                <StyledTableCell>category</StyledTableCell>
                <StyledTableCell>edit</StyledTableCell>

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
                  <StyledTableCell>
                    <IconButton className='!text-teal-700' onClick={() => handleClickOpen(row)}>
                      <Edit />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
          >
            edit section eke weda methana karanna



            <p>Name : {selectedRow?.sellername}</p>




          </Dialog>
        </React.Fragment>
      </div>
    </div>

  )


}

export default ElectronicTable;



