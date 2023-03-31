import BlogList from '../components/blogs/BlogList';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}
