import Navbar from "./components/global/navbar"

function App() {
  return (
    <div className="bg-slate-200 min-h-screen font-oswald">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[80%] rounded-[20px] bg-blue-100 p-2 border border-solid border-blue-400 flex flex-row justify-between">
          <div className="w-[50%] flex flex-col items-center justify-between">
            <div className="">Login page</div>
          </div>
          <div className="w-[50%]">
            <img width={550} height={600} src={'https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
