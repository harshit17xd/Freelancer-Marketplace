import React, { useState } from 'react';

const ServiceRequestForm = ({ onSubmit }) => {
  const [serviceDetails, setServiceDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(serviceDetails);
    setServiceDetails('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Details
        </label>
        <textarea
          value={serviceDetails}
          onChange={(e) => setServiceDetails(e.target.value)}
          required
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe the service you need..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ServiceRequestForm; 