import Navbar from "@/Components/App/Navbar";
import ApplicationLogo from "@/Components/App/ApplicationLogo";
import Dropdown from "@/Components/Core/Dropdown";
import NavLink from "@/Components/Core/NavLink";
import ResponsiveNavLink from "@/Components/Core/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }) {
  const user = usePage().props.auth.user;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-full">
      <Navbar />

      {header && (
        <header className="bg-white shadow-sm">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
