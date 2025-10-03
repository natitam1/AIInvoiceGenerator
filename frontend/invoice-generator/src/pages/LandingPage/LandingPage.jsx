import React, { useEffect, useState } from "react";
import Header from "../../components/landing/Header";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const isAuthenticated = false;
  const user = { name: "Natnael", email: "natitam@exmple.com" };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#ffffff] text-gray-600">
      <Header />
    </div>
  );
};

export default LandingPage;
