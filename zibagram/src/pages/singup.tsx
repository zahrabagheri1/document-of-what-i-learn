import { redirect } from "react-router-dom";
import SingupForm from "../components/singup/SingupForm";
import AuthLayout from "../layout/authLayout";

export default function Singup() {
  return (
    <AuthLayout>
      <h1 className="text-center text-[30px] basis-1/5">Sing up page</h1>
      <SingupForm />
      <div className="w-[100%] flex flex-row gap-2 items-center ">
        <p className="">You have acount?</p>
        <a onClick={() => redirect("/")} className="">
          Login with your acount
        </a>
      </div>
    </AuthLayout>
  )
}

