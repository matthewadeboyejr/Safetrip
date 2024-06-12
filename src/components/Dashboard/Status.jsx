import { RiSteering2Fill, RiCarFill } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";
const Status = () => {
  return (
    <div className="grid md:grid-cols-3  gap-5">
      <div className="flex flex-col bg-msp-blue p-10 bg-opacity-5 rounded-md gap-2">
        <div className="flex  justify-between items-center ">
          <h3>Active Drivers</h3>
          <RiSteering2Fill />
        </div>
        <div className="text-2xl font-semibold pb-6 ">5,000</div>
        <div className="flex justify-end">
          <button className="text-sm underline ">view all</button>
        </div>
      </div>
      <div className="flex flex-col bg-msp-blue p-10 bg-opacity-5 rounded-md gap-2">
        <div className="flex  justify-between items-center ">
          <h3>Active Rides</h3>
          <RiCarFill />
        </div>
        <div className="text-2xl font-semibold pb-6 ">5,000</div>
        <div className="flex justify-end">
          <button className="text-sm underline ">view all</button>
        </div>
      </div>
      <div className="flex flex-col bg-msp-blue p-10 bg-opacity-5 rounded-md gap-2">
        <div className="flex  justify-between items-center ">
          <h3>Active Passenger</h3>
          <IoPersonCircle />
        </div>
        <div className="text-2xl font-semibold pb-6 ">5,000</div>
        <div className="flex justify-end">
          <button className="text-sm underline ">view all</button>
        </div>
      </div>
    </div>
  );
};

export default Status;
