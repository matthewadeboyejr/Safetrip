import Header from "../components/general/Header";
import Status from "../components/Dashboard/Status";

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <Header title={"Dashboard"} />
      <Status />
      <div>
        <div className="">
          <h3 className=" ">Ride History</h3>
          <div className="opacity-30 text-center">No data yet</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
