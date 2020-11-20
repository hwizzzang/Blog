import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';
import mediaQuery from '@styles/mediaQuery';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const categories = Array.from(
        new Set(posts.map((item) => item.node.frontmatter.category).sort()),
    );

    return (
        <Layout categories={categories} title={siteTitle}>
            <SEO title={siteTitle} />
            <StyledPostList>
                {posts.map((item) => {
                    const node = item.node;
                    const { excerpt, frontmatter } = node;
                    const { slug } = node.fields;
                    const { date, description, title, thumbnail } = frontmatter;

                    return (
                        <li key={slug}>
                            <div>
                                <Link to={slug}>
                                    {!!thumbnail && (
                                        <Img
                                            alt={thumbnail.alt}
                                            fluid={
                                                thumbnail.src.childImageSharp
                                                    .fluid
                                            }
                                        />
                                    )}
                                </Link>
                                <h3>
                                    <Link to={slug}>{title ?? slug}</Link>
                                </h3>
                                <span>{date}</span>
                            </div>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: description || excerpt,
                                }}
                            />
                        </li>
                    );
                })}
            </StyledPostList>
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
                        thumbnail {
                            alt
                            src {
                                childImageSharp {
                                    fluid(maxWidth: 1280) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const StyledPostList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1);
    grid-gap: 1.6rem;
    max-width: 128rem;
    margin: 0 auto;
    padding: 0 1.6rem;

    ${mediaQuery('md')`
        grid-gap: 2.4rem;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 2.4rem;
    `}

    ${mediaQuery('lg')`
        grid-gap: 3.2rem;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 3.2rem;
    `}
    
    li {
        border: 0.1rem solid black;
    }
`;
