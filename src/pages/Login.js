import LoginForm from "../components/forms/LoginForm";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div className="flex md:flex-row flex-col  w-screen h-screen ">
      <div className="bg-msp-blue dark:bg-msp-black md:w-1/3 md:flex  md:flex-col flex-row gap-20 md:px-6 md:pt-32  px-6 py-3">
        <div>
          <Logo />
        </div>
        <h1 className="text-msp-bg  text-xl font-bold md:block hidden">
          <span>
            Your Safety Pal:<br></br>
          </span>
          <span className="text-msp-yellow">Ensuring Safety in Every Ride</span>
        </h1>
      </div>
      <div className=" dark:bg-msp-black dark:bg-opacity-20 flex flex-1 justify-center md:items-center pt-20 md:pt-0">
        <div className="px-5 md:px-0 w-full md:w-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
