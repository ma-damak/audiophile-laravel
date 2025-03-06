import { Link, usePage } from "@inertiajs/react";

const Navbar = () => {
  const { auth } = usePage().props;
  const { user } = auth;
  return (
    <nav className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link href="/">
                <img
                  className="size-8"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Reports
                </a>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              <button
                type="button"
                className="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="rounded-full size-8"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <Link
                    href={route("profile.edit")}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>

                  <Link
                    href={route("logout")}
                    method={"post"}
                    as="button"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {user && (
                <>
                  <Link
                    href={route("profile.edit")}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href={route("logout")}
                    method={"post"}
                    as="button"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Logout
                  </Link>
                </>
              )}
              {!user && (
                <>
                  <Link
                    href={route("login")}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    href={route("register")}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
