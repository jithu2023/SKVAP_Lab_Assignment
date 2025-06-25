// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Tests from './Pages/Test';
import Bookings from './Pages/Bookings';
import Layout from './components/Layout';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/tests"
        element={
          token ? (
            <Layout>
              <Tests />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/bookings"
        element={
          token ? (
            <Layout>
              <Bookings />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
