import { selectCurrentUser } from "@/redux/features/auth/authSlice.slice";
import { useAppSelector } from "@/redux/hook";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Dropdown, MenuProps } from "antd";
import { House, LayoutDashboard } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

const navigation = [
  { name: "Meeting Rooms", href: "/rooms", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "About us", href: "/about-us", current: false },
  { name: "Contact us", href: "/contact-us", current: false },
];

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to={`/`}
          className="px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec] flex gap-2 items-center"
        >
          <House size={15} />
          <p>Home</p>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to={`/${user?.role.toLowerCase()}/dashboard`}
          className="px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec] flex gap-2 items-center"
        >
          <LayoutDashboard size={15} />
          <p>Dashboard</p>
        </Link>
      ),
    },
    {
      key: "3",
      label: <LogoutButton />,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-[#002F76] fixed top-0 left-0 right-0 z-20 border-b-[3px] border-white"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-[#44FD60] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5 " />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
            <div className="hidden sm:ml-6 sm:block">
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
                   
                    <Link
                      to={item.href}
                    >
                       {item.name}
                    </Link>
                  </a>
                ))}
                {user ? (
                  <div>
                    {/* Profile dropdown */}
                    <Dropdown
                      className="ml-3 cursor-pointer"
                      menu={{ items }}
                      placement="bottomRight"
                      trigger={["click"]}
                      arrow
                    >
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </Dropdown>
                  </div>
                ) : (
                  <div>
                    <Button
                      className="text-[#002F76] font-semibold"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Button>
                    <Button
                      className="text-[#002F76] font-semibold ml-3"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  </div>
                )}
              </div>
            </div>
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
            {user ? (
              <div>
                {/* Profile dropdown */}
                <Dropdown
                  className="ml-3 cursor-pointer"
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                  arrow
                >
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </Dropdown>
              </div>
            ) : (
              <div>
                <Button
                  className="text-[#002F76] font-semibold"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <Button
                  className="text-[#002F76] font-semibold ml-3"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
