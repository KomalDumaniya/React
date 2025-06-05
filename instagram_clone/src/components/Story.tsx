interface StoryProps {
  username: string;
  imgUrl: string;
}

export default function Story({ username, imgUrl }: StoryProps) {
  return (
    <div className="flex flex-col items-center">
      <img className="h-16 w-16 rounded-full border-2 border-pink-500" src={imgUrl} alt={username} />
      <p className="text-sm truncate w-16">{username}</p>
    </div>
  );
}
