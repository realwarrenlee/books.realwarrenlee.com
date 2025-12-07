import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/components/MDXComponents";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getBlogPost } from "@/utils/blogUtils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPost(slug) : null;

  if (!slug || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-blog-text-primary">Post not found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>
    );
  }

  const { Component, frontmatter } = post;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Glass Banner */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <header className="flex items-center justify-between py-3 px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-blog-hover"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <ThemeToggle />
        </header>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Post Header */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-blog-text-primary leading-tight flex-1 min-w-0 pr-4">
              {frontmatter.title}
            </h1>
            <span className="bg-muted px-3 py-1 rounded-lg text-sm font-medium text-blog-category whitespace-nowrap">
              {frontmatter.category}
            </span>
          </div>
          <p className="text-xl text-blog-text-secondary leading-relaxed mb-4">
            {frontmatter.description}
          </p>
          <div className="flex items-center text-blog-text-secondary text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-blog-text-primary prose-p:text-blog-text-secondary prose-li:text-blog-text-secondary prose-blockquote:text-blog-text-secondary prose-strong:text-blog-text-primary prose-code:text-blog-text-primary prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:font-normal">
          <MDXProvider components={MDXComponents}>
            <Component />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;