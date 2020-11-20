const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPost = path.resolve('./src/templates/BlogPost.tsx');

    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            excerpt
                            fields {
                                slug
                            }
                            frontmatter {
                                date(formatString: "DD MMMM, YYYY")
                                title
                            }
                        }
                    }
                }
            }
        `,
    );

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    console.log(posts.length);

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;

        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: 'slug',
            node,
            value,
        });
    }
};
