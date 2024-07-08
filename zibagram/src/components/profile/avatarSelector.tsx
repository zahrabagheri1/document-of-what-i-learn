import avatar from "/image/avatar.png";

export default function AvatarSelector() {
    return (
        <div className="basis-2/5 flex gap-4 flex-col items-start px-5">
            <div className="basis-2/3">
                <img
                    height={"100px"}
                    width={"100px "}
                    src={avatar}
                    alt="avatar"
                    className="rounded-[50%]"
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                choose avatar
            </button>
        </div>

    )
}