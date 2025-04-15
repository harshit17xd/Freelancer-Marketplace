import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useProfileStore } from "../store/profileStore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { authUser, isLoggedIn } = useAuthStore();
  const { userProfile, fetchUserProfile, updateUserProfile } = useProfileStore();
  const navigate = useNavigate();

  const predefinedSkills = [
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "TypeScript",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "SQL",
    "MongoDB"
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: "",
    selectedSkills: [],
    customSkills: "",
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
      // Split skills into predefined and custom
      const selectedSkills = userProfile.skills.filter(skill => predefinedSkills.includes(skill));
      const customSkills = userProfile.skills
        .filter(skill => !predefinedSkills.includes(skill))
        .join(", ");

      setUpdatedProfile({
        name: userProfile.name || "",
        selectedSkills,
        customSkills,
      });
    }
  }, [userProfile]);

  const toggleSkill = (skill) => {
    const updatedSkills = updatedProfile.selectedSkills.includes(skill)
      ? updatedProfile.selectedSkills.filter(s => s !== skill)
      : [...updatedProfile.selectedSkills, skill];
    setUpdatedProfile({ ...updatedProfile, selectedSkills: updatedSkills });
  };

  const handleSaveAndExit = async () => {
    await handleUpdate();
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    const allSkills = [
      ...updatedProfile.selectedSkills,
      ...updatedProfile.customSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '')
    ];

    const success = await updateUserProfile({
      name: updatedProfile.name,
      skills: allSkills,
    });

    if (success) {
      fetchUserProfile();
      setIsEditing(false);
      setShowSkillsDropdown(false);
    }
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white relative">
            <div className="absolute top-4 right-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveAndExit}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Save Changes
                </button>
              )}
            </div>
            {!isEditing ? (
              <>
                <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                <p className="text-blue-100">{userProfile.email}</p>
              </>
            ) : (
              <input
                type="text"
                value={updatedProfile.name}
                onChange={(e) => setUpdatedProfile({ ...updatedProfile, name: e.target.value })}
                placeholder="Your Name"
                className="bg-white/10 text-white placeholder-blue-200 px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            )}
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skills Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                {!isEditing ? (
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Skills Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex justify-between items-center"
                      >
                        <span>
                          {updatedProfile.selectedSkills.length
                            ? `Selected ${updatedProfile.selectedSkills.length} skills`
                            : "Select Skills"}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            showSkillsDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {showSkillsDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200">
                          {predefinedSkills.map((skill) => (
                            <div
                              key={skill}
                              onClick={() => toggleSkill(skill)}
                              className="flex items-center p-3 hover:bg-blue-50 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={updatedProfile.selectedSkills.includes(skill)}
                                onChange={() => {}}
                                className="mr-3 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-gray-900">{skill}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Custom Skills Input */}
                    <input
                      type="text"
                      placeholder="Add custom skills (comma-separated)"
                      value={updatedProfile.customSkills}
                      onChange={(e) =>
                        setUpdatedProfile({ ...updatedProfile, customSkills: e.target.value })
                      }
                      className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />

                    {/* Selected Skills Display */}
                    {updatedProfile.selectedSkills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {updatedProfile.selectedSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className="ml-2 focus:outline-none hover:text-blue-600"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Portfolio Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
                {userProfile.portfolio && userProfile.portfolio.length > 0 ? (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <a
                      href={userProfile.portfolio[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Portfolio
                    </a>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No portfolio uploaded</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;