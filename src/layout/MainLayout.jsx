import { Outlet } from "react-router-dom";
import NavBar from "../components/headers/NavBar";

function MainLayout() {
  return (
    <main className="dark:bg-black overflow-hidden">
      <NavBar/>
      <Outlet/>
     

      <footer className="bg-gray-800 dark:bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400 dark:text-gray-500">
              YogaMaster is dedicated to helping you achieve a balanced lifestyle through yoga and mindfulness practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/classes" className="hover:text-yellow-300">
                  Classes
                </a>
              </li>
              <li>
                <a href="/instructors" className="hover:text-yellow-300">
                  Instructors
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} YogaMaster. All rights reserved.
        </div>
      </footer>


    </main>
  );
}

export default MainLayout;
