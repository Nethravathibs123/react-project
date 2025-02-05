import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    setUnsavedChanges(false);
    alert('Data saved successfully!');
  };

  return (
    <Box p={4}>
      <h1>User Data Form</h1>
      <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth />
      <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
      <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default UserDataForm;