import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout() {
  const location = useLocation();
  const isPublicRoute = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {!isPublicRoute && <Sidebar />}
      <div className="flex-1 flex flex-col bg-gray-50">
        {!isPublicRoute && <Header />}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
