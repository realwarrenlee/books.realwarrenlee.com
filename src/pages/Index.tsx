import { BlogHeader } from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";
import { useNavigate } from "react-router-dom";
import { getAllBlogPosts } from "@/utils/blogUtils";

const Index = () => {
  const navigate = useNavigate();
  const blogPosts = getAllBlogPosts();

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <BlogHeader />
      </div>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={() => handlePostClick(post.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
