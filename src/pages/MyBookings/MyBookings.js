import './MyBookings.css'
import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/authSlice';

const MyBookings = () => {
  const slotData = useSelector(selectUser);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const getMyBookings = async () => {
    try {
      const response = await axios.get("/book/fetch-bookings-by-user");
      setBookings(response?.data)

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMyBookings();
  }, [])

  return (
    <div>
      <h2>My Bookings</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Doctor ID</TableCell>
              <TableCell align="right">Doctor Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.doctor_id}
                </TableCell>
                <TableCell align="right">{row.doctor_id}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.start_time}</TableCell>
                <TableCell align="right">{row.end_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyBookings;
