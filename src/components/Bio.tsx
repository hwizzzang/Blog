import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

export default function Bio() {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        github
                        facebook
                        twitter
                        instagram
                    }
                }
            }
        }
    `);

    const { author, social } = data.site.siteMetadata;
    const { name, summary } = author;
    const { facebook, github, instagram } = social;

    console.log(social);

    return (
        <StyledBio>
            <Image
                alt={name}
                fixed={data.avatar.childImageSharp.fixed}
                imgStyle={{
                    border: '0.1rem solid #ddd',
                    borderRadius: '100%',
                }}
            />
            <b>{name}</b>
            <span>{summary}</span>
            <ul>
                {!!github && <li>{github}</li>}
                {!!facebook && <li>{facebook}</li>}
                {!!instagram && <li>{instagram}</li>}
            </ul>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    b {
        margin: 2rem 0 0;
    }

    span {
        display: block;
        margin: 0.5rem 0 0;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem;
    }

    li {
        text-align: center;

        &:not(:first-child) {
            margin: 0 0 0 2rem;
        }
    }
`;
