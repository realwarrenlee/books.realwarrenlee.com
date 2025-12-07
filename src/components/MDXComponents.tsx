import { ReactNode } from "react";

export const MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-bold mb-6 text-blog-text-primary">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8 text-blog-text-primary">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl font-medium mb-3 mt-6 text-blog-text-primary">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-blog-text-secondary mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 text-blog-text-secondary space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 text-blog-text-secondary space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-blog-text-secondary">{children}</li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 my-6 text-blog-text-secondary italic">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-blog-text-primary">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
      <code className="text-sm font-mono text-blog-text-primary">{children}</code>
    </pre>
  ),
  a: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href} className="text-blue-600 dark:text-blue-400">
      {children}
    </a>
  ),
  table: ({ children }: { children: ReactNode }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm border border-border">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-muted/50">
      {children}
    </thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody className="divide-y divide-border">
      {children}
    </tbody>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="hover:bg-muted/30 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-6 py-4 text-left text-sm font-semibold text-blog-text-primary bg-muted/20 border-b border-border">
      {children}
    </th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-6 py-4 text-sm text-blog-text-secondary border-b border-border/50">
      {children}
    </td>
  ),
};