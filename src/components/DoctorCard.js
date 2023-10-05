import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DoctorCardComponent = ({ doctor }) => {
  const { id, doctor_name, specialization } = doctor;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book-doctor-list/${id}`)
  }
  
  return (
    <>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {specialization}
          </Typography>
          <Typography variant="h5" component="div">
            {doctor_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} size="large">Book now</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default DoctorCardComponent;
