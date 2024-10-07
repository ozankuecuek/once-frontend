import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    userEmail: '',
    userPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    const apiUrl = process.env.REACT_APP_API_URL || '';
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/create-organization-and-user`,
        formData
      );
      setMessage('Organization and user created successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setMessage('Error creating organization and user. Please try again.');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Organization and User
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Organization Name"
        name="organizationName"
        value={formData.organizationName}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="User Email"
        type="email"
        name="userEmail"
        value={formData.userEmail}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="User Password"
        type="password"
        name="userPassword"
        value={formData.userPassword}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Create Organization and User
      </Button>
      {message && (
        <Typography color={message.includes('Error') ? 'error' : 'success'} sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default OrganizationForm;