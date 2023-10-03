import './SlotBooking.css'
import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSlot } from '../../store/slotBookingSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SlotBooking = () => {
  const slotData = useSelector(selectSlot);
  const navigate = useNavigate();

  console.log(slotData);

  const [doctorInfo, setDoctorInfo] = useState({});

  const handleBooking = async () => {
    try{
      const response = await axios.post("/book/book-slot", {
        doctorId: slotData?.doctorId,
        date: slotData?.slotDate,
        startTime: slotData?.slotTimeStart,
        endTime: slotData?.slotTimeEnd,
      });
      toast.success("Successfully Booked!")

      setTimeout(() => {
        navigate(`/home`)
      }, 1500)

    }
    catch(error){
      toast.error(error);
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{slotData?.doctorName}</td>
            <td>{slotData?.slotDate}</td>
            <td>{slotData?.slotTimeStart}</td>
            <td>{slotData?.slotTimeEnd}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleBooking}>Book Now</button>
      <ToastContainer />
    </>
  );
};

export default SlotBooking;
