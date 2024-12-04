import React from "react";
import {
  FaWifi,
  FaProjectDiagram,
  FaPencilAlt,
  FaPhoneAlt,
  FaTv,
  FaTemperatureHigh,
  FaClipboardList,
  FaVideo,
  FaBolt,
  FaUsers,
  FaTable,
  FaVolumeUp,
  FaPlug,
  FaCoffee,
  FaPrint,
  FaSun,
  FaAdjust,
  FaThLarge,
  FaBuilding,
  FaCar,
  FaLock,
  FaMagic,
  FaBath,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Card } from "../ui/card";
const amenitiesList = [
  { value: "wifi", label: "Wi-Fi", icon: <FaWifi className="text-sm md:text-lg text-gray-600" /> },
  {
    value: "projector",
    label: "Projector/Screen",
    icon: <FaProjectDiagram className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "whiteboard",
    label: "Whiteboard/Markers",
    icon: <FaPencilAlt className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "conferencePhone",
    label: "Conference Phone",
    icon: <FaPhoneAlt className="text-sm md:text-lg text-gray-600" />,
  },
  { value: "tv", label: "TV or Monitor", icon: <FaTv className="text-sm md:text-lg text-gray-600" /> },
  {
    value: "ac",
    label: "Air Conditioning/Heating",
    icon: <FaTemperatureHigh className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "flipcharts",
    label: "Flipcharts",
    icon: <FaClipboardList className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "videoConferencing",
    label: "Video Conferencing Equipment",
    icon: <FaVideo className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "chargingStations",
    label: "Charging Stations",
    icon: <FaBolt className="text-sm md:text-lg text-gray-600" />,
  },
  { value: "seating", label: "Seating", icon: <FaUsers className="text-sm md:text-lg text-gray-600" /> },
  { value: "tables", label: "Tables", icon: <FaTable className="text-sm md:text-lg text-gray-600" /> },
  {
    value: "audioSystem",
    label: "Audio System",
    icon: <FaVolumeUp className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "powerOutlets",
    label: "Power Outlets",
    icon: <FaPlug className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "coffeeStation",
    label: "Coffee/Water Station",
    icon: <FaCoffee className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "printerScanner",
    label: "Printer/Scanner",
    icon: <FaPrint className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "naturalLighting",
    label: "Natural Lighting",
    icon: <FaSun className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "curtains",
    label: "Curtains/Blinds",
    icon: <FaAdjust className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "videoWalls",
    label: "Video Walls",
    icon: <FaThLarge className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "phoneBooth",
    label: "Phone Booth",
    icon: <FaBuilding className="text-sm md:text-lg text-gray-600" />,
  },
  { value: "parking", label: "Parking", icon: <FaCar className="text-sm md:text-lg text-gray-600" /> },
  {
    value: "securityAccess",
    label: "Security Access",
    icon: <FaLock className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "receptionArea",
    label: "Reception Area",
    icon: <FaUserGroup className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "cleaningServices",
    label: "Cleaning Services",
    icon: <FaMagic className="text-sm md:text-lg text-gray-600" />,
  },
  {
    value: "restRooms",
    label: "Rest Rooms",
    icon: <FaBath className="text-sm md:text-lg text-gray-600" />,
  },
];
const AdminAmenitiesCard = ({amenities}:any) => {
  console.log(amenities);
  const findData = amenitiesList.find(item=> item.value===amenities);
  console.log(findData);
  return <div className="flex flex-wrap justify-center items-center p-4 rounded-lg gap-4  cursor-default">
    <div>{findData?.icon}</div>
    <div className="text-[9px] md:text-[9px] lg:text-[12px]">{findData?.label}</div>
  </div>;
};

export default AdminAmenitiesCard;
