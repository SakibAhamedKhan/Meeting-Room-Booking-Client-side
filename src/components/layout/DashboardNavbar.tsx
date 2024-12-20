import { selectCurrentUser } from "@/redux/features/auth/authSlice.slice";
import { useAppSelector } from "@/redux/hook";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Button, Dropdown, MenuProps } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

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
  const user = useAppSelector(selectCurrentUser);

  console.log(user);

  
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to={`/`}
          className="block px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec]"
        >
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to={`/${user?.role.toLowerCase()}/dashboard`}
          className="block px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec]"
        >
          Dashboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <LogoutButton/>
      ),
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-[#002F76] fixed top-0 left-0 right-0 z-20"
    >
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
