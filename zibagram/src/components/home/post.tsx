interface PostProps {
    title: string;
    description: string;
    image: string;
    category: string;
    auther: string
}

export default function Post({
    title,
    description,
    image,
    category,
    auther
}: PostProps) {

    function ShowEdit() {
        return auther === localStorage.getItem("username")
    }
    return (
        <div className="w-[300px] h-auto flex rounded-[20px] bg-white border border-solid border-blue-400 justify-between flex-col items-start p-3 gap-2">
            <p className="">{category}</p>
            <h1 className="text-[16px]">{title}</h1>
            <div className="flex relative items-center flex-nowrap justify-center flex-col">
                <img src={image} alt="posts" className="w-[150px] h-[150px]" />
                <p className="text-[12px]">{description}</p>
            </div>

            {ShowEdit() &&
                <div className="flex flex-row gap-3">
                    <div className="w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5" >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                    </div>

                    <div className="w-5 h-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 " >
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            }
        </div>
    );
}
