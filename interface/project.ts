export interface IProject {
    slug: string;
    frontmatter: {
        title: string;
        imageUrl: string;
        category: string;
        excerpt: string;
        tags: string[];
    }
}