import nextra from 'nextra'

const withNextra = nextra({
    defaultShowCopyCode: true,
    latex: true,
    contentDirBasePath: '/',
})
export default withNextra({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})