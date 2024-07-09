import { useLoaderData } from "react-router-dom";
import AvatarSelector from "../components/profile/avatarSelector"
import BioForm from "../components/profile/bioForm";
import { BioResponse } from "../@types/type";

export default function Profile() {
    const data = useLoaderData()
    console.log(data)

    return (
        <div className="sm:w-[60vw] w-[80vw] flex rounded-[20px] bg-blue-100 border border-solid border-blue-400 justify-between flex-col p-5 ">
            <h1 className="text-3xl text-blue-700">information user</h1>

            <div className="flex pt-8 ">
                <AvatarSelector />
                <BioForm defaultBio={(data as BioResponse).bio} />
            </div>
        </div>
    );
}
