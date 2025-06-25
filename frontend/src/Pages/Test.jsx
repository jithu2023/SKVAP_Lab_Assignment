import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

export default function Tests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/tests')
      .then(res => setTests(res.data))
      .finally(() => setLoading(false));
  }, []);

  const bookTest = async (testId) => {
    const patientId = localStorage.getItem('patientId');
    try {
      await API.post('/bookings', { patientId, testId });
      alert('Test booked!');
    } catch {
      alert('Booking failed');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-700">Loading tests...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Available Lab Tests</h2>
        <button
          onClick={() => navigate('/bookings')}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Go to My Bookings
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {tests.map(test => (
          <div
            key={test._id}
            className="p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-3">
              <p className="text-xl font-semibold text-gray-800">{test.name}</p>
              <p className="text-gray-600">₹{test.price}</p>
            </div>
            <button
              onClick={() => bookTest(test._id)}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Book Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
