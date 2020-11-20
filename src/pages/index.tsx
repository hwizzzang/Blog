import { Link, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '@components/Layout';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';
import mediaQuery from '@styles/mediaQuery';
import Thumbnail from '@components/Thumbnail';

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
            <StyledPostList>
                {posts.map((item) => {
                    const node = item.node;
                    const { excerpt, frontmatter } = node;
                    const { slug } = node.fields;
                    const { date, description, title } = frontmatter;

                    console.log(node);

                    return (
                        <StyledPostListItem key={slug}>
                            <div>
                                <Thumbnail src={item} />
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
                        </StyledPostListItem>
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

export const StyledPostList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1);
    grid-gap: 1.6rem;

    ${mediaQuery('md')`
        grid-gap: 2.4rem;
        grid-template-columns: repeat(2, 1fr);
    `}

    ${mediaQuery('lg')`
        grid-gap: 3.2rem;
        grid-template-columns: repeat(3, 1fr);
    `}
`;

export const StyledPostListItem = styled.li`
    border: 0.1rem solid black;

    //&:not(:last-child) {
    //    margin-bottom: 2rem;
    //}
`;
