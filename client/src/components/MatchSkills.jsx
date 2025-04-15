import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const MatchSkills = () => {
  const { authUser } = useAuthStore();
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (authUser) {
      socket.emit('join', authUser.userId);
      socket.on('matchedUsers', (data) => {
        setMatchedUsers(data);
      });
    }

    return () => {
      socket.off('matchedUsers');
    };
  }, [authUser]);

  const handleMatchSkills = async () => {
    const response = await fetch('/api/match-skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authUser.token}`,
      },
      body: JSON.stringify({ skills }),
    });
    const data = await response.json();
    setMatchedUsers(data);
  };

  return (
    <div className="match-skills p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Matched Users</h2>
      <button onClick={handleMatchSkills} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600">
        Find Matches
      </button>
      <ul className="list-disc pl-5">
        {matchedUsers.length > 0 ? (
          matchedUsers.map((user) => (
            <li key={user._id} className="mb-2">
              <span className="font-semibold">{user.name}</span> - {user.skills.join(', ')}
            </li>
          ))
        ) : (
          <li>No matches found.</li>
        )}
      </ul>
    </div>
  );
};

export default MatchSkills; 