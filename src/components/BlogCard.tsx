import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export const BlogCard = ({ post, onClick }: BlogCardProps) => {
  return (
    <Card 
      className="p-6 bg-blog-surface hover:bg-blog-hover transition-colors cursor-pointer border-border"
      onClick={onClick}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <h2 className="text-xl font-semibold text-blog-text-primary leading-tight flex-1 min-w-0">
          {post.title}
        </h2>
        <span className="text-sm font-medium text-blog-category bg-muted px-2 py-1 rounded-lg whitespace-nowrap">
          {post.category}
        </span>
      </div>
      
      <p className="text-blog-text-secondary mb-4 leading-relaxed">
        {post.description}
      </p>
      
      <div className="flex items-center text-blog-text-secondary text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </Card>
  );
};