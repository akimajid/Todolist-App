"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    if (mounted) {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }
  }, [mounted]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Todo App</Link>
        </div>
        <div className="space-x-4">
          <Link href="/todos">Todos</Link>
          <Link href="/todos/create">Create Todo</Link>
          {isAuthenticated ? (
            <button className="hover:text-gray-400" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
