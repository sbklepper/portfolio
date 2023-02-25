export interface Project {
    projects: Project[];
    slug: string;
    frontmatter: {
        title: string;
        imageUrl: string;
        category: string;
        excerpt: string;
        tags: string[];
    }
}