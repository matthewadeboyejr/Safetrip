import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import Header from "../../general/Header";
import useFormContext from "../../../hooks/useFormContext";
import DriverFormInputs from "./DriverFormInputs";

const NewDriverForm = () => {
  const {
    title,
    page,
    setPage,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
    handleSubmit,
  } = useFormContext();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className=" flex-1 space-y-10">
      <Header title={"New Driver"} />

      <div className="flex md:flex-row flex-col gap-6 ">
        <div className=" border-msp-blue/20 border text-msp-blue text-sm font-medium md:p-10 p-2 rounded-md bg-opacity-20  ">
          <div className="flex md:flex-col flex-row justify-between gap-3 ">
            <span>Personal </span>
            <span>Next of kin </span>
            <span>Document </span>
          </div>
        </div>
        <div className=" flex-1 space-y-6 ">
          {/*    Form start */}
          <form className="space-y-10 " onSubmit={handleSubmit}>
            {/*      Title */}
            <header className="flex items-center justify-between border-b p-3 text-lg">
              <h3>{title[page]}</h3>
            </header>
            {/*      Title end */}
            {/*  form input component start */}

            <DriverFormInputs />
            {/*  form input component end */}

            <div className="flex gap-4 justify-end">
              <button
                onClick={handlePrev}
                type="button"
                disabled={disablePrev}
                className={`${prevHide} flex items-center justify-center gap-2 border-msp-yellow border  hover:bg-opacity-90 py-2 px-3 rounded-md text-sm`}
              >
                <RxTrackPrevious />
                <div className=""> Prev</div>
              </button>
              <button
                onClick={handleNext}
                type="button"
                disabled={disableNext}
                className={`${nextHide} cursor-pointer flex items-center justify-center gap-2 bg-msp-yellow hover:bg-opacity-90 py-2 px-3 rounded-md text-sm `}
              >
                Next
                <RxTrackNext />
              </button>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`${submitHide} cursor-pointer flex items-center justify-center gap-2 bg-msp-yellow hover:bg-opacity-90 py-2 px-3 rounded-md text-sm`}
              >
                Submit
              </button>
            </div>

            {/*  form Button ends */}
          </form>
          {/*    Form end */}
        </div>
      </div>
    </div>
  );
};
export default NewDriverForm;
