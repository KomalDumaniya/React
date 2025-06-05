import Story from './Story';

const dummyStories = Array.from({ length: 10 }, (_, i) => ({
  username: `user${i + 1}`,
  imgUrl: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

export default function Stories() {
  return (
    <div className="bg-white p-4 flex space-x-4 overflow-x-auto rounded-lg scrollbar-hide shadow-sm">
      {dummyStories.map((story, i) => (
        <Story key={i} {...story} />
      ))}
    </div>
  );
}
