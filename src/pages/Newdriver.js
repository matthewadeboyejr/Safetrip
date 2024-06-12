import { FormProvider } from "../context/FormContext";
import NewDriverForm from "../components/forms/driverform/NewDriverForm";
import SavedDriverModal from "../components/modals/SavedDriverModal";

const Newdriver = () => {
  return (
    <FormProvider>
      <NewDriverForm />
      <SavedDriverModal />
    </FormProvider>
  );
};

export default Newdriver;
