import { RiHomeFill, RiSteering2Fill, RiCarFill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const menuItem = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <RiHomeFill />,
  },
  {
    path: "/drivers",
    name: "Drivers",
    icon: <RiSteering2Fill />,
  },
  {
    path: "/owner",
    name: "Car Owner",
    icon: <FaAddressCard />,
  },
  {
    path: "/vehicle",
    name: "Vehicle",
    icon: <RiCarFill />,
  },
  {
    path: "/passenger",
    name: "Passenger",
    icon: <IoPersonCircle />,
  },
];

export default menuItem;
