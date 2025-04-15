import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useProfileStore } from "../store/profileStore";

const SkillExchange = () => {
  const { isLoggedIn } = useAuthStore();
  const { userProfile } = useProfileStore();
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    skillNeeded: "",
    skillOffered: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:4040/api/skill-exchange', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching skill exchange requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      console.log('Submitting request:', newRequest);
      const response = await fetch('http://localhost:4040/api/skill-exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newRequest),
      });
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      const data = await response.json();
      console.log('Request submitted successfully:', data);
      setRequests([...requests, data]);
      setNewRequest({ skillNeeded: '', skillOffered: '', description: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error posting skill exchange request:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to access the Skill Exchange feature.</p>
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Login Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Skill Exchange</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            {showForm ? "Cancel" : "Create Exchange Request"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Create New Exchange Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill You Need
                  </label>
                  <input
                    type="text"
                    value={newRequest.skillNeeded}
                    onChange={(e) =>
                      setNewRequest({ ...newRequest, skillNeeded: e.target.value })
                    }
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., React"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill You're Offering
                  </label>
                  <input
                    type="text"
                    value={newRequest.skillOffered}
                    onChange={(e) =>
                      setNewRequest({ ...newRequest, skillOffered: e.target.value })
                    }
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Python"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newRequest.description}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, description: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe what you're looking for and what you can offer..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {request.userName}
                  </h3>
                  <p className="text-sm text-gray-500">{request.createdAt}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Needs</p>
                  <p className="text-blue-600 font-semibold">
                    {request.skillNeeded}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Offers</p>
                  <p className="text-green-600 font-semibold">
                    {request.skillOffered}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{request.description}</p>
              <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillExchange;
