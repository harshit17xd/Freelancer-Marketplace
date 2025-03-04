// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";

// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuthStore(); // Get state and actions

//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       {/* Logo */}
//       <div className="text-2xl font-bold">
//         <Link to="/" className="hover:text-green-400 transition">
//           HustlerHub
//         </Link>
//       </div>

//       {/* Menu Links */}
//       <div className="flex gap-6">
//         {isLoggedIn ? (
//           // Show Profile and Logout if logged in
//           <>
//             <Link
//               to="/profile"
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Profile
//             </Link>
//             <button
//               onClick={logout}
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           // Show Home, Login, and Sign Up if not logged in
//           <>
//             <Link
//               to="/"
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Dashboard
//             </Link>

//             <Link
//               to="/"
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Home
//             </Link>
//             <Link
//               to="/login"
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Login 
                
//             </Link>
//             <Link
//               to="/signup"
//               className="text-gray-300 hover:text-green-400 transition"
//             >
//               Get Started
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuthStore(); // Get state and actions

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        <Link to="/" className="hover:text-blue-600 transition">
          WorkFree.
        </Link>
      </div>

      {/* Menu Links */}
      <div className="flex gap-6 items-center">
        {isLoggedIn ? (
          // Show Profile and Logout if logged in
          <>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Profile
            </Link>
            <button
              onClick={logout}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          // Show Home, Login, and Sign Up if not logged in
          <>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;