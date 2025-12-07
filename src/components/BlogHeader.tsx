import { ThemeToggle } from "./ThemeToggle";

export const BlogHeader = () => {
  return (
    <header className="flex items-center justify-between py-3 px-6">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg text-blog-text-primary">
          <span className="font-bold">Books</span>
          <span className="font-serif italic ml-0.5"> by Warren Lee</span>
        </h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};