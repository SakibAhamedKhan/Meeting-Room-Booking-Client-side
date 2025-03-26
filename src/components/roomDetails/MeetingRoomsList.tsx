import { Select } from 'antd';
import { FaAdjust, FaBath, FaBolt, FaBuilding, FaCar, FaClipboardList, FaCoffee, FaLock, FaMagic, FaPencilAlt, FaPhoneAlt, FaPlug, FaPrint, FaProjectDiagram, FaSun, FaTable, FaTemperatureHigh, FaThLarge, FaTv, FaUsers, FaVideo, FaVolumeUp, FaWifi } from 'react-icons/fa';
import { FaUserGroup } from "react-icons/fa6";

const { Option } = Select;

const amenitiesList = [
  { value: 'wifi', label: 'Wi-Fi', icon: <FaWifi className="h-5 w-5" /> },
  { value: 'projector', label: 'Projector/Screen', icon: <FaProjectDiagram className="h-5 w-5" /> },
  { value: 'whiteboard', label: 'Whiteboard/Markers', icon: <FaPencilAlt className="h-5 w-5" /> },
  { value: 'conferencePhone', label: 'Conference Phone', icon: <FaPhoneAlt className="h-5 w-5" /> },
  { value: 'tv', label: 'TV or Monitor', icon: <FaTv className="h-5 w-5" /> },
  { value: 'ac', label: 'Air Conditioning/Heating', icon: <FaTemperatureHigh className="h-5 w-5" /> },
  { value: 'flipcharts', label: 'Flipcharts', icon: <FaClipboardList className="h-5 w-5" /> },
  { value: 'videoConferencing', label: 'Video Conferencing Equipment', icon: <FaVideo className="h-5 w-5" /> },
  { value: 'chargingStations', label: 'Charging Stations', icon: <FaBolt className="h-5 w-5" /> },
  { value: 'seating', label: 'Seating', icon: <FaUsers className="h-5 w-5" /> },
  { value: 'tables', label: 'Tables', icon: <FaTable className="h-5 w-5" /> },
  { value: 'audioSystem', label: 'Audio System', icon: <FaVolumeUp className="h-5 w-5" /> },
  { value: 'powerOutlets', label: 'Power Outlets', icon: <FaPlug className="h-5 w-5" /> },
  { value: 'coffeeStation', label: 'Coffee/Water Station', icon: <FaCoffee className="h-5 w-5" /> },
  { value: 'printerScanner', label: 'Printer/Scanner', icon: <FaPrint className="h-5 w-5" /> },
  { value: 'naturalLighting', label: 'Natural Lighting', icon: <FaSun className="h-5 w-5" /> },
  { value: 'curtains', label: 'Curtains/Blinds', icon: <FaAdjust className="h-5 w-5" /> },
  { value: 'videoWalls', label: 'Video Walls', icon: <FaThLarge className="h-5 w-5" /> },
  { value: 'phoneBooth', label: 'Phone Booth', icon: <FaBuilding className="h-5 w-5" /> },
  { value: 'parking', label: 'Parking', icon: <FaCar className="h-5 w-5" /> },
  { value: 'securityAccess', label: 'Security Access', icon: <FaLock className="h-5 w-5" /> },
  { value: 'receptionArea', label: 'Reception Area', icon: <FaUserGroup className="h-5 w-5" /> },
  { value: 'cleaningServices', label: 'Cleaning Services', icon: <FaMagic className="h-5 w-5" /> },
  { value: 'restrooms', label: 'Restrooms', icon: <FaBath className="h-5 w-5" /> },
];

const MeetingRoomsList = () => {
  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Select amenities"
      optionLabelProp="label"
    >
      {amenitiesList.map((amenity) => (
        <Option key={amenity.value} value={amenity.value} label={amenity.label}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {amenity.icon}
            <span style={{ marginLeft: 8 }}>{amenity.label}</span>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default MeetingRoomsList;
