import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup, verifyOTP } = useAuthStore();
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    selectedSkills: [],
    customSkills: "",
    portfolio: null,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "portfolio") {
      setFormData({ ...formData, portfolio: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const toggleSkill = (skill) => {
    const updatedSkills = formData.selectedSkills.includes(skill)
      ? formData.selectedSkills.filter(s => s !== skill)
      : [...formData.selectedSkills, skill];
    setFormData({ ...formData, selectedSkills: updatedSkills });
  };

  const handleCustomSkillsChange = (e) => {
    setFormData({ ...formData, customSkills: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    
    // Combine selected and custom skills
    const allSkills = [
      ...formData.selectedSkills,
      ...formData.customSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '')
    ].join(', ');
    data.append("skills", allSkills);
    
    if (formData.portfolio) {
      data.append("portfolio", formData.portfolio);
    }

    const signupSuccess = await signup(data);

    if (signupSuccess) {
      setUserEmail(formData.email);
      setOtpSent(true);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const success = await verifyOTP(otp);

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center text-gray-900 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          {otpSent ? "Verify OTP" : "Sign Up"}
        </h2>

        {!otpSent ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            
            {/* Skills Selection */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex justify-between items-center"
              >
                <span>{formData.selectedSkills.length ? `Selected ${formData.selectedSkills.length} skills` : "Select Skills"}</span>
                <svg className={`w-5 h-5 transition-transform ${showSkillsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                        checked={formData.selectedSkills.includes(skill)}
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
              value={formData.customSkills}
              onChange={handleCustomSkillsChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />

            {/* Selected Skills Display */}
            {formData.selectedSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.selectedSkills.map((skill) => (
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

            <input
              type="file"
              name="portfolio"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleChange}
              className="p-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleOtpSubmit}>
            <p className="text-center text-gray-600">
              We have sent an OTP to{" "}
              <span className="text-blue-600 font-medium">{userEmail}</span>. Please enter
              it below to verify.
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Verify OTP
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;