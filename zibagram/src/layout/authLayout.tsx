

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="sm:w-[60vw] w-[80vw] flex rounded-[20px] bg-blue-100 border border-solid border-blue-400 sm:flex-row justify-between flex-col  ">
            <div className="flex-1 flex-col items-center justify-between p-5">
                {children}
            </div>
            <div className="flex-1">
                <img
                    width={"100%"}
                    height={"100%"}
                    // src={
                    //     "https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000"
                    // }
                    src={"https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8044448-6430849.png?f=webp"}
                    alt="login page"
                />
            </div>
        </div>
    );
}


