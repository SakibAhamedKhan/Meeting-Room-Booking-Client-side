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
  { value: "wifi", label: "Wi-Fi", icon: <FaWifi className="text-md md:text-3xl text-gray-600" /> },
  {
    value: "projector",
    label: "Projector/Screen",
    icon: <FaProjectDiagram className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "whiteboard",
    label: "Whiteboard/Markers",
    icon: <FaPencilAlt className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "conferencePhone",
    label: "Conference Phone",
    icon: <FaPhoneAlt className="text-md md:text-3xl text-gray-600" />,
  },
  { value: "tv", label: "TV or Monitor", icon: <FaTv className="text-md md:text-3xl text-gray-600" /> },
  {
    value: "ac",
    label: "Air Conditioning/Heating",
    icon: <FaTemperatureHigh className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "flipcharts",
    label: "Flipcharts",
    icon: <FaClipboardList className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "videoConferencing",
    label: "Video Conferencing Equipment",
    icon: <FaVideo className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "chargingStations",
    label: "Charging Stations",
    icon: <FaBolt className="text-md md:text-3xl text-gray-600" />,
  },
  { value: "seating", label: "Seating", icon: <FaUsers className="text-md md:text-3xl text-gray-600" /> },
  { value: "tables", label: "Tables", icon: <FaTable className="text-md md:text-3xl text-gray-600" /> },
  {
    value: "audioSystem",
    label: "Audio System",
    icon: <FaVolumeUp className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "powerOutlets",
    label: "Power Outlets",
    icon: <FaPlug className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "coffeeStation",
    label: "Coffee/Water Station",
    icon: <FaCoffee className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "printerScanner",
    label: "Printer/Scanner",
    icon: <FaPrint className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "naturalLighting",
    label: "Natural Lighting",
    icon: <FaSun className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "curtains",
    label: "Curtains/Blinds",
    icon: <FaAdjust className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "videoWalls",
    label: "Video Walls",
    icon: <FaThLarge className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "phoneBooth",
    label: "Phone Booth",
    icon: <FaBuilding className="text-md md:text-3xl text-gray-600" />,
  },
  { value: "parking", label: "Parking", icon: <FaCar className="text-md md:text-3xl text-gray-600" /> },
  {
    value: "securityAccess",
    label: "Security Access",
    icon: <FaLock className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "receptionArea",
    label: "Reception Area",
    icon: <FaUserGroup className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "cleaningServices",
    label: "Cleaning Services",
    icon: <FaMagic className="text-md md:text-3xl text-gray-600" />,
  },
  {
    value: "restRooms",
    label: "Rest Rooms",
    icon: <FaBath className="text-md md:text-3xl text-gray-600" />,
  },
];
const AmenitiesCard = ({amenities}:any) => {
  console.log(amenities);
  const findData = amenitiesList.find(item=> item.value===amenities);
  console.log(findData);
  return <Card className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-200 cursor-default">
    <div>{findData?.icon}</div>
    <div className="text-[10px] md:text-md lg:text-lg">{findData?.label}</div>
  </Card>;
};

export default AmenitiesCard;
