import { Link } from "react-router-dom";
import SignupForm from "../components/signup/SignupForm";
import AuthLayout from "../layout/authLayout";

export default function Signup() {
  return (
    <AuthLayout>
      <h1 className="text-center text-[30px] basis-1/5">Sing up page</h1>
      <SignupForm />
      <div className="w-[100%] flex flex-row gap-2 items-center ">
        <p className="">You have acount?</p>
        <Link to={'/login'} className="">
          Login with your acount
        </Link>
      </div>
    </AuthLayout>
  )
}

