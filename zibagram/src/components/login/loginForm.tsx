import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../../@types/type";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { auth } from "../../auth";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();
  // const { setIsAuthenticated } = useContext(AuthContext);

  // async function oneSubmit(data: LoginFormData) {
  //   console.log(data)
  //   try {
  //     await auth.login(data)
  //     setIsAuthenticated(true)
  //     navigate("/")
  //   } catch (error) {
  //     console.log("Error Occured!")
  //     console.log(error)
  //   }
  // }

  function onSubmit(data: LoginFormData) {
    if (data.email === "admin@gamial.com" && data.password === "123456") {
      navigate("/");
    } else {
      alert("email or password not currect");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col basis-3/4">
      <div className="flex flex-col gap-2">
        <label htmlFor="yourEmail">Your Email: </label>
        <div className="relative mb-6 flex items-center flex-row w-[100%]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <svg
              className="w-6 h-6 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
          <input
            type="email"
            id="yourEmail"
            className="text-md rounded-md py-2 pl-10 pr-2 w-[100%]"
            placeholder="youremail@gmail.com"
            autoComplete="email"
            {...register("email")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="yourPassword">Your Password: </label>
        <div className="relative mb-6 flex items-center flex-row">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <svg
              className="w-6 h-6 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="password"
            id="yourPassword"
            className="text-md rounded-md py-2 pl-10 pr-2 w-[100%]"
            placeholder="your password"
            autoComplete="current-password"
            {...register("password")}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>
  );
}
