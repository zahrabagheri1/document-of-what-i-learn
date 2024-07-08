import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/loginForm";
import AuthLayout from "../layout/authLayout";

export default function Login() {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <h1 className="text-center text-[30px] basis-1/5">Login page</h1>
      <LoginForm />
      <div className="w-[100%] flex flex-row gap-2 items-center ">
        <p className="">You don't have acount?</p>
        <a onClick={() => navigate('/signup')} className="">
          create acount
        </a>
      </div>
    </AuthLayout>
  );
}


