import nextra from 'nextra'

const withNextra = nextra({
    defaultShowCopyCode: true,
    latex: true,
    contentDirBasePath: '/',
});

export default withNextra({
    distDir: 'build',
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})