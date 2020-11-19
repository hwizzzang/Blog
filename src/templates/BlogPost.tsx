import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '@components/Bio';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import PostSuggestions from '@templates/PostSuggestions';

// TODO: replace type any
export default function BlogPost({ data, pageContext }: any) {
    const post = data.markdownRemark;

    console.log(data);

    return (
        <Layout title={post.frontmatter.title}>
            <SEO
                description={post.excerpt || post.excerpt}
                title={post.frontmatter.title}
            />
            <StyledPostContent>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </StyledPostContent>
            <PostSuggestions />
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
            timeToRead
            excerpt(pruneLength: 160)
            fields {
                slug
            }
            html
        }
    }
`;

const StyledPostContent = styled.div`
    background: pink;
`;
