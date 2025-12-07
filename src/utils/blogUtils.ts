// Dynamic blog post loader utility
import { lazy } from 'react';

// Import all MDX files and their frontmatter dynamically
const blogModules = import.meta.glob('../content/*.mdx', { eager: true });

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

export interface BlogModule {
  default: React.ComponentType;
  frontmatter: BlogPost;
}

// Extract all blog posts from MDX files
export const getAllBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  
  for (const path in blogModules) {
    const module = blogModules[path] as BlogModule;
    if (module.frontmatter) {
      posts.push(module.frontmatter);
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get a specific blog post by slug
export const getBlogPost = (slug: string): { Component: React.ComponentType; frontmatter: BlogPost } | null => {
  for (const path in blogModules) {
    const module = blogModules[path] as BlogModule;
    if (module.frontmatter && module.frontmatter.slug === slug) {
      return {
        Component: module.default,
        frontmatter: module.frontmatter
      };
    }
  }
  return null;
};

// Get all available slugs
export const getAllSlugs = (): string[] => {
  const slugs: string[] = [];
  
  for (const path in blogModules) {
    const module = blogModules[path] as BlogModule;
    if (module.frontmatter) {
      slugs.push(module.frontmatter.slug);
    }
  }
  
  return slugs;
};