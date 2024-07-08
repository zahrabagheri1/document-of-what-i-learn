import { useRef, useState } from "react";
import avatar from "/image/avatar.png";
import { api } from "../../api/api";
import { AvatarResponse } from "../../@types/type";

export default function AvatarSelector() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [imageURL, setImageURL] = useState(avatar)
    const [loading, setLoading] = useState(false)

    function onclickButton() {
        inputRef.current?.click()
    }

    async function onChoosseAvatar(e: React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation()
        e.preventDefault()

        if (e.target.files?.length) {
            console.log(e.target.files[0])

            try {
                setLoading(true)
                const reponse = await api.requestChangeAvatar(e.target.files[0])
                const responseData = reponse.data as AvatarResponse
                setImageURL(responseData.avatar.replace("5173", "8000"))
                console.log(reponse)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(true)
            }
        }
    }

    return (
        <div className="basis-2/5 flex gap-4 flex-col items-start px-5">
            <div className="basis-2/3">
                <img
                    height={"100px"}
                    width={"100px "}
                    src={imageURL}
                    alt="avatar"
                    className="rounded-[50%]"
                />
            </div>

            <input type="file" name="" id="" className="hidden" ref={inputRef} onChange={onChoosseAvatar} />

            <button
                type="submit"
                onClick={onclickButton}
                disabled={loading}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                choose avatar
            </button>
        </div>

    )
}