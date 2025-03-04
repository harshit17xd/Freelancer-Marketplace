// import React, { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuthStore();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(formData, navigate);

//     if (success) {
//       navigate("/"); // Redirect to dashboard on successful login
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100 p-6">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-green-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-400 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-6 text-center text-gray-400">
//           Don't have an account?{" "}
//           <span
//             className="text-green-500 hover:underline cursor-pointer"
//             onClick={() => navigate("/signup")}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData, navigate);

    if (success) {
      navigate("/"); // Redirect to dashboard on successful login
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;