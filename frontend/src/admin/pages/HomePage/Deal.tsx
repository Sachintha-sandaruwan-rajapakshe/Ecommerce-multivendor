import { Delete, Edit } from '@mui/icons-material';
import { Box, Button, Dialog, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, type SelectChangeEvent } from '@mui/material';
import React from 'react'
import DealTable from './DealTable';
import DealCategoryTable from './DealCategorytable';
import CreateDealForm from './CreatedealForm';



const Deal = () => {

  const [active,setActive] = React.useState("Deals");

  const tabs = [
    "Deals","Category","Create_Deal"
  ];

  return (



    <div>
      <div className='flex gap-4 py-3'>
        {tabs.map((item)=><Button onClick={()=>setActive(item)} variant={active===item?"contained":"outlined"}>{item}</Button>)}
      </div>
      <div>
        {active === "Deals"?<DealTable/>:""}
        {active === "Category"?<DealCategoryTable/>:""}
        {active === "Create_Deal"?<CreateDealForm/>:""}
      </div>
    </div>

  )


}

export default Deal;



