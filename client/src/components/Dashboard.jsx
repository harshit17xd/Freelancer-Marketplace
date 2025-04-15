import React, { useState, useEffect } from 'react';
import MatchSkills from './MatchSkills';
import { Link } from 'react-router-dom';
import ServiceRequestForm from './ServiceRequestForm';

const Dashboard = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    const fetchServiceRequests = async () => {
      try {
        const response = await fetch('http://localhost:4040/api/service-requests', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setServiceRequests(data);
      } catch (error) {
        console.error('Error fetching service requests:', error);
      }
    };

    fetchServiceRequests();
  }, []);

  const handleServiceRequestSubmit = async (serviceDetails) => {
    try {
      const response = await fetch('http://localhost:4040/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ serviceDetails }),
      });
      const newRequest = await response.json();
      setServiceRequests([...serviceRequests, newRequest]);
    } catch (error) {
      console.error('Error creating service request:', error);
    }
  };

  return (
    <div className="dashboard p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700">Welcome to your dashboard!</p>
      <Link to="/find-match" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
        Find Match
      </Link>
      <MatchSkills />
      <ServiceRequestForm onSubmit={handleServiceRequestSubmit} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Service Requests</h2>
        <ul className="space-y-4">
          {serviceRequests.map((request) => (
            <li key={request._id} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{request.serviceDetails}</p>
              <p className="text-sm text-gray-500">Status: {request.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard; 