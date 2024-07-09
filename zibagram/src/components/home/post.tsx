interface PostProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function Post({
  title,
  description,
  image,
  category,
}: PostProps) {
  return (
    <div className="w-[300px] h-[300px] flex rounded-[20px] bg-white border border-solid border-blue-400 justify-between flex-col items-start p-3 gap-2">
      <p className="">{category}</p>
      <h1 className="text-[16px]">{title}</h1>
      <div className="flex items-center flex-nowrap justify-center flex-col">
        <img src={image} alt="posts" className="w-[150px] h-[150px]" />
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
}
