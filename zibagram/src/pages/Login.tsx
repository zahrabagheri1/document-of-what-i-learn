import { Link } from "react-router-dom";
import LoginForm from "../components/login/loginForm";
import AuthLayout from "../layout/authLayout";

export default function Login() {

  return (
    <AuthLayout>
      <h1 className="text-center text-[30px] basis-1/5">Login page</h1>
      <LoginForm />
      <div className="w-[100%] flex flex-row gap-2 items-center ">
        <p className="">You don't have acount?</p>
        <Link to={'/signup'} className="">
          create acount
        </Link>
      </div>
    </AuthLayout>
  );
}


