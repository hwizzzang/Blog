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
    const { facebook, github, instagram, twitter } = social;

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
            <StyledProfile>
                <h2>
                    <Link to="/about">{name}</Link>
                </h2>
                <span>{summary}</span>
                {!!Object.values(social).length && (
                    <ul>
                        {!!github && <li>github</li>}
                        {!!facebook && <li>facebook</li>}
                        {!!twitter && <li>twitter</li>}
                        {!!instagram && <li>instagram</li>}
                    </ul>
                )}
            </StyledProfile>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    background: lightgray;
`;

const StyledProfile = styled.div``;
