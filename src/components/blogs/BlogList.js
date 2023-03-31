import BlogItem from './BlogItem';

export default function BlogList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <BlogItem key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
