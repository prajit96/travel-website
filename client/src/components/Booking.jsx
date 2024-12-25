import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { DatePicker, InputNumber, Button, message, Modal } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const { RangePicker } = DatePicker;

const Booking = () => {
  const { id } = useParams(); // Get tour ID from the URL
  const navigate = useNavigate(); // For navigation
  const [dates, setDates] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!id) {
      message.error('Invalid Tour ID. Redirecting...');
      navigate('/'); // Redirect to home if ID is missing
    }
  }, [id, navigate]);

  const handleDateChange = (dates, dateStrings) => {
    setDates(dateStrings);
  };

  const handleBooking = () => {
    if (dates.length === 0) {
      message.error('Please select your travel dates!');
      return;
    }
    if (adults <= 0) {
      message.error('Please select at least one adult!');
      return;
    }
    setVisible(true);
  };

  const handleConfirmBooking = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        message.error('You must be logged in to book a tour!');
        setLoading(false);
        return;
      }
      // console.log('Token:', token);
      const bookingData = {
        tour: id,
        dates,
        adults,
        children,
      };
      const response = await Axios.post('https://travel-website-backend-btfr.onrender.com/api/bookings', bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      message.success('Booking successful!');
      console.log(response.data);
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.msg || 'Error making booking';
      message.error(errorMessage);
      console.error(error);
    } finally {
      setLoading(false);
      setVisible(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ padding: '100px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Book Your Tour</h1>
      <p>
        <strong>Tour ID:</strong> {id}
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Select Dates:</label>
        <RangePicker onChange={handleDateChange} style={{ width: '100%' }} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Number of Adults:</label>
        <InputNumber
          min={1}
          defaultValue={1}
          value={adults}
          onChange={(value) => setAdults(value)}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Number of Children:</label>
        <InputNumber
          min={0}
          defaultValue={0}
          value={children}
          onChange={(value) => setChildren(value)}
          style={{ width: '100%' }}
        />
      </div>

      <Button type="primary" onClick={handleBooking} block>
        Confirm Booking
      </Button>

      <Modal
        title="Confirm Your Booking"
        open={visible}
        onOk={handleConfirmBooking}
        onCancel={() => setVisible(false)}
        confirmLoading={loading}
      >
        <p>
          <strong>Tour ID:</strong> {id || 'N/A'}
        </p>
        <p>
          <strong>Dates:</strong> {dates.length > 0 ? dates.join(' to ') : 'Not selected'}
        </p>
        <p>
          <strong>Adults:</strong> {adults}
        </p>
        <p>
          <strong>Children:</strong> {children}
        </p>
        <p>Are you sure you want to confirm this booking?</p>
      </Modal>
    </div>
    </>
  );
};

export default Booking;
