export default function Suggestions() {
  const users = Array.from({ length: 5 }, (_, i) => ({
    username: `user${i + 10}`,
    imgUrl: `https://i.pravatar.cc/150?img=${i + 40}`,
  }));

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm w-full">
      <h3 className="font-semibold text-gray-700 mb-4">Suggestions For You</h3>
      {users.map((user, i) => (
        <div key={i} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full mr-3" src={user.imgUrl} alt={user.username} />
            <p className="text-sm font-medium text-gray-700">{user.username}</p>
          </div>
          <button className="text-blue-500 text-xs font-semibold hover:text-blue-600">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
