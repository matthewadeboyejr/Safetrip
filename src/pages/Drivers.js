import { useNavigate } from "react-router-dom";
import Header from "../components/general/Header";

import { IoSearchCircle, IoFilterCircle, IoAdd } from "react-icons/io5";
import DriversTable from "../components/table/DriversTable";

const Drivers = () => {
  const navigate = useNavigate();
  return (
    <div className=" space-y-5">
      <Header title={"Drivers"} />

      <div className="flex justify-between pt-10 pr-6">
        <div className="flex items-center">
          <div className="flex items-center bg-msp-blue  bg-opacity-10 px-4 py-2 rounded-md gap-4">
            <IoSearchCircle className="text-2xl text-msp-blue" />
            <input
              className=" md:w-96 placeholder:text-sm bg-transparent outline-none  text-sm"
              placeholder="Search driver e.g driver ID"
            />
          </div>
          <div className="text-2xl bg-msp-blue  bg-opacity-20 p-2 rounded-md ml-2 text-msp-blue">
            <IoFilterCircle className="" />
          </div>
        </div>

        <div
          onClick={() => {
            navigate(`/newdriver`);
          }}
          className=" bg-msp-yellow hover:bg-opacity-90 p-2 text-2xl  rounded-full"
        >
          <IoAdd />
        </div>
      </div>

      <DriversTable />
    </div>
  );
};

export default Drivers;
