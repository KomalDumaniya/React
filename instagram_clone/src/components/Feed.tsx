import Post from './Post';

const posts = [
  {
    username: 'user1',
    userImg: '/assets/post1.jpeg',
    postImg: '/assets/post1.jpeg',
  },
  {
    username: 'user2',
    userImg: '/assets/post2.jpeg',
    postImg: '/assets/post2.jpeg',
  },
  {
    username: 'user3',
    userImg: '/assets/post3.jpeg',
    postImg: '/assets/post3.jpeg',
  },
];

export default function Feed() {
  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <Post
          key={i}
          username={post.username}
          userImg={post.userImg}
          postImg={post.postImg}
        />
      ))}
    </div>
  );
}
