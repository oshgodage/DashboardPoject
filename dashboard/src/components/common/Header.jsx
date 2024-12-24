import { User, LogOut } from "lucide-react";
import { useState } from "react";

export default function Header({ title }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLogin}
            className="flex items-center text-gray-100 hover:text-indigo-500 transition duration-200"
          >
            {isLoggedIn ? (
              <LogOut size={20} className="mr-2" />
            ) : (
              <User size={20} className="mr-2" />
            )}
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
}
