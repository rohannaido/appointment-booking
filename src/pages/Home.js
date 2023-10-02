import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';  // Assuming SquareComponent is in a file named SquareComponent.js
import axios from './../axiosConfig';

const Home = () => {
  const [doctors, setDoctors] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/doctor/list'); // Replace with your API endpoint
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once (on component mount)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {doctors.map((doctorItem) => (
        <DoctorCard key={doctorItem?.doctor_id} doctor={doctorItem} />
      ))}
    </div>
  );
};

export default Home;
