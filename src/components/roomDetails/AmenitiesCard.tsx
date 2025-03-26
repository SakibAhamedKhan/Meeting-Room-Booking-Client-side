import {
  FaAdjust,
  FaBath,
  FaBolt,
  FaBuilding,
  FaCar,
  FaClipboardList,
  FaCoffee,
  FaLock,
  FaMagic,
  FaPencilAlt,
  FaPhoneAlt,
  FaPlug,
  FaPrint,
  FaProjectDiagram,
  FaSun,
  FaTable,
  FaTemperatureHigh,
  FaThLarge,
  FaTv,
  FaUsers,
  FaVideo,
  FaVolumeUp,
  FaWifi,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Card } from "../ui/card";

const IconStyle = "text-md md:text-xl text-[#002f76]"

const amenitiesList = [
  { value: "wifi", label: "Wi-Fi", icon: <FaWifi className={IconStyle} /> },
  {
    value: "projector",
    label: "Projector/Screen",
    icon: <FaProjectDiagram className={IconStyle} />,
  },
  {
    value: "whiteboard",
    label: "Whiteboard/Markers",
    icon: <FaPencilAlt className={IconStyle} />,
  },
  {
    value: "conferencePhone",
    label: "Conference Phone",
    icon: <FaPhoneAlt className={IconStyle} />,
  },
  { value: "tv", label: "TV or Monitor", icon: <FaTv className={IconStyle} /> },
  {
    value: "ac",
    label: "Air Conditioning/Heating",
    icon: <FaTemperatureHigh className={IconStyle} />,
  },
  {
    value: "flipcharts",
    label: "Flipcharts",
    icon: <FaClipboardList className={IconStyle} />,
  },
  {
    value: "videoConferencing",
    label: "Video Conferencing Equipment",
    icon: <FaVideo className={IconStyle} />,
  },
  {
    value: "chargingStations",
    label: "Charging Stations",
    icon: <FaBolt className={IconStyle} />,
  },
  { value: "seating", label: "Seating", icon: <FaUsers className={IconStyle} /> },
  { value: "tables", label: "Tables", icon: <FaTable className={IconStyle} /> },
  {
    value: "audioSystem",
    label: "Audio System",
    icon: <FaVolumeUp className={IconStyle} />,
  },
  {
    value: "powerOutlets",
    label: "Power Outlets",
    icon: <FaPlug className={IconStyle} />,
  },
  {
    value: "coffeeStation",
    label: "Coffee/Water Station",
    icon: <FaCoffee className={IconStyle} />,
  },
  {
    value: "printerScanner",
    label: "Printer/Scanner",
    icon: <FaPrint className={IconStyle} />,
  },
  {
    value: "naturalLighting",
    label: "Natural Lighting",
    icon: <FaSun className={IconStyle} />,
  },
  {
    value: "curtains",
    label: "Curtains/Blinds",
    icon: <FaAdjust className={IconStyle} />,
  },
  {
    value: "videoWalls",
    label: "Video Walls",
    icon: <FaThLarge className={IconStyle} />,
  },
  {
    value: "phoneBooth",
    label: "Phone Booth",
    icon: <FaBuilding className={IconStyle} />,
  },
  { value: "parking", label: "Parking", icon: <FaCar className={IconStyle} /> },
  {
    value: "securityAccess",
    label: "Security Access",
    icon: <FaLock className={IconStyle} />,
  },
  {
    value: "receptionArea",
    label: "Reception Area",
    icon: <FaUserGroup className={IconStyle} />,
  },
  {
    value: "cleaningServices",
    label: "Cleaning Services",
    icon: <FaMagic className={IconStyle} />,
  },
  {
    value: "restRooms",
    label: "Rest Rooms",
    icon: <FaBath className={IconStyle} />,
  },
];
const AmenitiesCard = ({amenities}:any) => {
  console.log(amenities);
  const findData = amenitiesList.find(item=> item.value===amenities);
  console.log(findData);
  return <Card className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-50 cursor-default">
    <div>{findData?.icon}</div>
    <div className="text-[10px] md:text-[12px] lg:text-[16px]">{findData?.label}</div>
  </Card>;
};

export default AmenitiesCard;
