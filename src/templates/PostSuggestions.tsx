import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

export default function PostSuggestions({ data, pageContext }: any) {
    console.log(data);

    return (
        <nav>
            <ul>
                <li>sdf</li>
                <li>sdf</li>
            </ul>
        </nav>
    );
}

export const result = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC }, filter: { id: {} }) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
