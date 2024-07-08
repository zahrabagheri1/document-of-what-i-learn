import AvatarSelector from "../components/profile/avatarSelector"
import BioForm from "../components/profile/bioForm";

export default function Profile() {
    return (
        <div className="sm:w-[60vw] w-[80vw] flex rounded-[20px] bg-blue-100 border border-solid border-blue-400 justify-between flex-col p-5 ">
            <h1 className="text-3xl text-blue-700">information user</h1>

            <div className="flex pt-8 ">
                <AvatarSelector />
                <BioForm />
            </div>
        </div>
    );
}
