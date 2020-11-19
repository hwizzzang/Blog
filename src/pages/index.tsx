import { Link, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    console.log(data);

    const categories = Array.from(
        new Set(posts.map((item) => item.node.frontmatter.category).sort()),
    );

    return (
        <Layout categories={categories} title={siteTitle}>
            <ul>
                {posts.map((item) => {
                    const node = item.node;
                    const { excerpt, frontmatter } = node;
                    const { slug } = node.fields;
                    const { date, description, title } = frontmatter;

                    return (
                        <StyledPostList key={slug}>
                            <div>
                                <h3>
                                    <Link to={slug}>{title ?? slug}</Link>
                                </h3>
                                <small>{date}</small>
                            </div>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: description || excerpt,
                                    }}
                                />
                            </section>
                        </StyledPostList>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        category
                    }
                    children {
                        ... on ImageSharp {
                            fluid {
                                base64
                                tracedSVG
                                srcWebp
                                srcSetWebp
                                originalImg
                                originalName
                            }
                            children {
                                ... on ImageSharp {
                                    id
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const StyledPostList = styled.li`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;
