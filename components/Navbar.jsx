"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = Cookies.get("auth");
    setIsLoggedIn(!!authToken);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-sky-400">
            MiniMart
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/items"
              className={`text-gray-700 hover:text-primary transition-colors ${
                pathname === "/items" ? "text-primary font-medium" : ""
              }`}
            >
              Items
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  href="/add-item"
                  className={`text-gray-700 hover:text-primary transition-colors ${
                    pathname === "/add-item" ? "text-primary font-medium" : ""
                  }`}
                >
                  Add Item
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
