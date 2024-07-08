
export default function BioForm() {
    return (
        <div className="basis-3/5">
            <form action="" className="w-full flex flex-col justify-around h-full gap-4">
                <label htmlFor="Writedescriptionaboutyourself">Write description about yourself</label>

                <textarea name="" id="Writedescriptionaboutyourself" className="basis-2/3 p-2.5 w-full bg-gray-50 border border-solid rounded border-white focus:border-blue-500 " placeholder="Optional description about yourself"></textarea>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    choose avatar
                </button>
            </form>

        </div>
    )
}
