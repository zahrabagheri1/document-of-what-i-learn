import React from 'react'
import LoginForm from '../components/login/loginForm'

function Login() {
    return (
        <div className="sm:w-[90vw] w-[80vw] flex rounded-[20px] bg-blue-100 border border-solid border-blue-400 sm:flex-row justify-between flex-col  ">
            <div className="flex-1 flex-col items-center justify-between p-5">
                <h1 className="text-center text-[30px] basis-1/5">Login page</h1>
                <LoginForm />
                <div className="w-[100%] flex flex-row gap-2 items-center " >
                    <p className="">You don't have acount?</p>
                    <a href="#" className="">create acount</a>

                </div>
            </div>
            <div className="flex-1">
                <img width={"100%"} height={"100%"} src={'https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000'} alt="login page" />
            </div>
        </div>
    )
}

export default Login