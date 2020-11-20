import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '@components/Layout';
import SEO from '@components/SEO';

// TODO: replace type any
export default function BlogPost({ data, pageContext }: any) {
    const post = data.markdownRemark;

    const { previous, next } = pageContext;
    console.log(pageContext);

    return (
        <Layout title={post.frontmatter.title}>
            <SEO
                description={post.excerpt || post.excerpt}
                title={post.frontmatter.title}
            />
            <StyledPostContent>
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <span>{post.frontmatter.date}</span>
                </div>
                <article dangerouslySetInnerHTML={{ __html: post.html }} />
                <StyledPostSuggestions>
                    <ul>
                        <li>
                            {!!previous && (
                                <Link to={previous.fields.slug} rel="prev">
                                    {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li>
                            {!!next && (
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title}
                                </Link>
                            )}
                        </li>
                    </ul>
                </StyledPostSuggestions>
            </StyledPostContent>
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

const StyledPostContent = styled.section``;

const StyledPostSuggestions = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        height: 4rem;
        background: pink;
    }
`;
