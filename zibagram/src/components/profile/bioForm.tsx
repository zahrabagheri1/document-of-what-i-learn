import { useForm } from "react-hook-form";
import { BioFormData } from "../../@types/type";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function BioForm() {
    const { register, handleSubmit } = useForm<BioFormData>();
    const navigate = useNavigate()
   
    async function onSubmit(data: BioFormData) {
        try {
            await api.requestChangeBio(data)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="basis-3/5">
            <form
                action=""
                className="w-full flex flex-col justify-around h-full gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="Writedescriptionaboutyourself">
                    Write description about yourself
                </label>

                <textarea
                    id="Writedescriptionaboutyourself"
                    className="basis-2/3 p-2.5 w-full bg-gray-50 border border-solid rounded border-white focus:border-blue-500 "
                    placeholder="Optional description about yourself"
                    {...register("bio")}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    save
                </button>
            </form>
        </div>
    );
}
