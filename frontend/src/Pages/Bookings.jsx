import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get('/bookings')
      .then(res => setBookings(res.data))
      .catch(err => {
        console.error(err);
        alert('Failed to fetch bookings');
      });
  }, []);

  const downloadReport = (bookingId) => {
    // Directly fetch static PDF from backend's /reports folder
    const backendBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    const fileUrl = `${backendBaseUrl}/reports/dummy_test_report.pdf`;

    fetch(fileUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to download report');
        }
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `dummy_report_${bookingId}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(err => {
        console.error('Download error:', err);
        alert('Failed to download report.');
      });
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map(booking => (
            <div
              key={booking._id}
              className="bg-gray-100 border border-gray-200 p-5 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{booking.test.name}</h3>
                <p className="text-sm text-gray-500">
                  Booked on: {new Date(booking.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => downloadReport(booking._id)}
                className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
              >
                Download Report
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
