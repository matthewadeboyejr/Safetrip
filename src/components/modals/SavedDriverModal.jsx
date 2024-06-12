import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import useFormContext from "../../hooks/useFormContext";
import { useNavigate } from "react-router-dom";

const SavedDriverModal = () => {
  const navigate = useNavigate();
  const { data, openSuccessModal } = useFormContext();

  return (
    <div
      className={`fixed inset-0  min-h-screen z-10  items-center justify-center flex ${
        openSuccessModal ? "visible bg-black/50" : "invisible"
      }`}
    >
      <div
        className={`md:w-1/3 w-full mx-10 rounded-md shadow p-5 transition-all space-y-6 bg-white ${
          openSuccessModal ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <header className="flex items-center justify-between border-b pb-3  ">
          <div className="flex items-center gap-2 text-sm">
            <h3>Saved - Awaiting capturing</h3>
            <FaCircleCheck className="text-green-600" />
          </div>
          <div
            onClick={() => {
              navigate("/drivers", { replace: true });
            }}
            className="cursor-pointer text-msp-blue bg-msp-blue/30 p-1 rounded-sm hover:bg-msp-blue/40 "
          >
            <IoCloseOutline />
          </div>
        </header>
        <div className="flex flex-col gap-5 border-b pb-5 text-xs">
          <div>
            <h5 className=" opacity-40">Driver details</h5>
            <p>
              {data.personalFName +
                " " +
                data.personalLName +
                ". " +
                data.personalContact +
                ". " +
                data.personalDob}
            </p>
          </div>
          <div>
            <h5 className="opacity-40">Next of kin details</h5>
            <p>{data.personalLicense}</p>
          </div>
        </div>
        <p className="bg-msp-yellow/30 p-3 rounded-sm text-sm text-center text-msp-blue">
          Driver have to come for capturing{" "}
        </p>
        <div className="  flex justify-center underline hover:opacity-80">
          <button
            className="cursor-pointer"
            onClick={() => {
              navigate("/drivers", { replace: true });
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedDriverModal;
