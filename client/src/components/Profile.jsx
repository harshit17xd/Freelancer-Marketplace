// 

import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useProfileStore } from "../store/profileStore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { authUser, isLoggedIn } = useAuthStore();
  const { userProfile, fetchUserProfile, updateUserProfile } = useProfileStore();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: "",
    skills: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (userProfile) {
      setUpdatedProfile({
        name: userProfile.name || "",
        skills: userProfile.skills?.join(", ") || "",
      });
    }
  }, [userProfile]);

  const handleSaveAndExit = async () => {
    await handleUpdate();
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    const updatedData = {
      name: updatedProfile.name,
      skills: updatedProfile.skills.split(",").map((skill) => skill.trim()),
    };

    const success = await updateUserProfile(updatedData);
    if (success) {
      fetchUserProfile();
      setIsEditing(false);
    }
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center p-6">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Profile</h2>

        {!isEditing ? (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {userProfile.name}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Skills:</strong> {userProfile.skills.join(", ")}
            </p>
            <p>
              <strong>Portfolio:</strong>{" "}
              {userProfile.portfolio.length > 0 ? (
                <a
                  href={userProfile.portfolio[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-500"
                >
                  View Portfolio
                </a>
              ) : (
                "Not uploaded"
              )}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              value={updatedProfile.name}
              onChange={(e) =>
                setUpdatedProfile({ ...updatedProfile, name: e.target.value })
              }
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={updatedProfile.skills}
              onChange={(e) =>
                setUpdatedProfile({ ...updatedProfile, skills: e.target.value })
              }
              placeholder="Skills (comma-separated)"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <button
                onClick={handleSaveAndExit}
                className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Save & Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;