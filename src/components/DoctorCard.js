import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCardComponent = ({ doctor }) => {
  const { id, doctor_name, specialization } = doctor;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book-doctor-list/${id}`)
  }
  
  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', textAlign: 'center' }}>
      <h3>{ doctor_name }</h3>
      <p>{ specialization }</p>
      <button onClick={handleClick}>Book Now - {id}</button>
    </div>
  );
};

export default DoctorCardComponent;
