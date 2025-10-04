import { ChevronDown } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({
  isOpen,
  onToggle,
  avatar,
  companyName,
  email,
  onLogout,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-3 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
      >
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-9 h-9 object-cover rounded-xl"
          />
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {companyName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-gray-900">{companyName}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
        <ChevronDown className="text-gray-400 h-4 w-4" />
      </button>
    </div>
  );
};

export default ProfileDropdown;
