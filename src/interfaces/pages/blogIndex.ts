import { SiteMetaData } from '@interfaces/commons';

export interface BlogIndexProps {
    data: {
        allMarkdownRemark: {
            edges: PostData[];
        };
        site: SiteMetaData;
    };
}

// thumbnail type 수정
export interface PostData {
    node: {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            category: string;
            date: string;
            description: string;
            title: string;
            thumbnail: any;
        };
    };
}
