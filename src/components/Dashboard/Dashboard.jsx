import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Activity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box p={4}>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </Box>
  );
};

export default Dashboard;