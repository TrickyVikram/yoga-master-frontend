import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // Red color for primary
    },
    secondary: {
      main: "#00ffee", // Cyan color for secondary
    },
  },
});

const NavBar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [navBg, setNavBg] = useState("");

  useEffect(() => {
    setIsHome(location.pathname === "/");

    // Update navbar background based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBg("bg-white dark:bg-black text-black dark:text-white");
      } else {
        setNavBg(isHome ? "bg-transparent" : "bg-white dark:bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isHome]);

  useEffect(() => {
    const root = document.documentElement;
    const darkClass = "dark";
    if (isDarkMode) {
      root.classList.add(darkClass);
    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2">
            <h1>YogaMaster</h1>
            <img src="/yoga-logo.png" alt="Logo" className="w-8 h-8" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex  items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.route}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive
                        ? "text-secondary"
                        : "text-black dark:text-white"
                    } hover:text-secondary transition-colors duration-300`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Login/Logout/Register */}
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-secondary"
                      : "text-black dark:text-white"
                  } hover:text-secondary transition-colors duration-300`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <ThemeProvider theme={theme}>
              <Switch
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <span className="text-sm text-black dark:text-white">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
