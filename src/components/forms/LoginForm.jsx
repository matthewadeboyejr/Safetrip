import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();

  const [hide, setHide] = useState(false);

  return (
    <form className=" space-y-5">
      <div className="text-xl px-2">Login</div>
      <input
        className=" rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
        type="text"
        placeholder="Username"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />

      <div className=" flex  justify-between items-center rounded-md p-3 w-full bg-msp-blue bg-opacity-10 ">
        <input
          className="placeholder:text-sm focus:outline-none bg-transparent"
          type={hide ? "password" : "text"}
          placeholder="Password"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="offf"
        />
        <div
          onClick={() => {
            setHide(!hide);
          }}
        >
          {" "}
          {hide ? <AiOutlineEye /> : <AiOutlineEyeInvisible className="   " />}
        </div>
      </div>
      <p className="text-xs text-right underline hover:opacity-70 ">
        trouble signing in?
      </p>
      <button
        onClick={() => {
          navigate("/dashboard", { replace: true });
        }}
        className="bg-msp-yellow dark:bg-msp-black dark:text-msp-bg p-3 w-full  rounded-md text-msp-blue hover:bg-opacity-65"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
