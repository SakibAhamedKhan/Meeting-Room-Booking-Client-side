import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from "@headlessui/react";
  import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
  import { Button } from "antd";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  
  const navigation = [
    { name: "Meeting Rooms", href: "#", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "About us", href: "/about-us", current: false },
    { name: "Contact us", href: "/contact-us", current: false },
  ];
  
  const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");
  
  const DashboardNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    return (
      <Disclosure as="nav" className="bg-[#002F76] fixed top-0 left-0 right-0 z-20">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start sm:items-stretch">
              <div className="flex shrink-0 items-center">
                <Link
                  to={`/`}
                  className="text-white font-bold text-2xl cursor-pointer"
                >
                  Meeting.com{" "}
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 justify-centen items-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.href === location.pathname
                          ? "bg-[#002F76] text-white"
                          : "text-gray-300 hover:text-[#44FD60]",
                        "rounded-md px-3 py-2 text-sm lg:text-lg font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    className="text-[#002F76] font-semibold"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                  <Button
                    className="text-[#002F76] font-semibold"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </div>
              </div> */}
              {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}
  
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
            </div>
          </div>
        </div>
  
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-3 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.href === location.pathname
                    ? "bg-[#002F76] text-white"
                    : "text-gray-300 hover:text-[#44FD60] ",
                  "block rounded-md py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <div className="flex space-x-4">
              <Button
                className="text-[#002F76] font-semibold"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
              <Button
                className="text-[#002F76] font-semibold"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    );
  };
  
  export default DashboardNavbar;
  