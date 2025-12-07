declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontmatter: {
    title: string;
    date: string;
    category: string;
    description: string;
    slug: string;
  };
}