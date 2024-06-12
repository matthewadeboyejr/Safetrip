import { RiNotification4Fill, RiArrowDownSLine } from "react-icons/ri";

const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-3">
      <h3 className="text-2xl">{title}</h3>
      <div className="flex items-center gap-3 ">
        <RiNotification4Fill className="text-msp-blue" />
        <div className="flex items-center  text-msp-blue">
          <span className="text-sm font-semibold">Hi, John Doe</span>
          <RiArrowDownSLine />
        </div>
      </div>
    </div>
  );
};

export default Header;
