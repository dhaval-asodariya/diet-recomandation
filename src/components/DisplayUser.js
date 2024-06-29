import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

function DisplayUser() {
    const allData = useSelector((state) => state.UserData.AllUserData);

  return (
    <div>
         <Table variant="simple">
      <TableHead>
        <TableRow>
          <TableCell>Sr no.</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {allData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{index}</TableCell>
            <TableCell>{data.username}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.password}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}

export default DisplayUser