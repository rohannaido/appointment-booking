import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const DoctorBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [doctorInfo, setDoctorInfo] = useState({});
  const [slotDates, setSlotDates] = useState([]);
  const [slotTimes, setSlotTimes] = useState([]);

  const doctorId = location.pathname.split("/")[2];
  const selectedSlotDate = location.pathname.split("/")[3];

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/doctor/list/${doctorId}`);
      setDoctorInfo(response.data?.[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSlotsByDoctor = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/slot/fetch-slot-dates-by-doctor/${doctorId}`);
      setSlotDates(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSlotsByDoctorByDate = async (slotDate) => {
    try {
      const response = await axios.get(`http://localhost:3001/slot/fetch-slot-times-by-doctor-and-date/${doctorId}/${slotDate}`);
      setSlotTimes(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDateClick = (slotDate) => {
    fetchSlotsByDoctorByDate(slotDate);
    navigate(`/book-doctor/${doctorId}/${slotDate}`)
  }

  useEffect(() => {
    fetchDoctorData();
    fetchSlotsByDoctor();
    if(selectedSlotDate){
      fetchSlotsByDoctorByDate(selectedSlotDate);
    }
  }, []); // Empty dependency array means this effect runs only once (on component mount)

  return (
    <>
      <h1>TEST</h1>
      <h2>{doctorInfo?.doctor_name}</h2>
      {slotDates.map((dateItem) => <button onClick={() => handleDateClick(dateItem)}>{dateItem}</button>)}
      {selectedSlotDate ? <h2>{selectedSlotDate}</h2> : <></>}
      {slotTimes.map((timeItem) => <button>{timeItem.start} - {timeItem.end}</button>)}
    </>
  );
};

export default DoctorBooking;
