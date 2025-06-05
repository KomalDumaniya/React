interface PostProps {
  username: string;
  userImg: string;
  postImg: string;
}

export default function Post({ username, userImg, postImg }: PostProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-3">
        <img src={userImg} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <p className="font-bold">{username}</p>
      </div>
      <img src={postImg} alt="post" className="w-full rounded-lg mb-3" />
      <p>
        <span className="font-bold">{username}</span> This is a cool post!
      </p>
    </div>
  );
}
