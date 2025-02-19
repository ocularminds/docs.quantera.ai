import nextra from 'nextra'

const withNextra = nextra({
    defaultShowCopyCode: true,
    latex: true,
    contentDirBasePath: '/',
})
 
/*const config = {
  banner: { /* ... / },
  /* ... *
  main: ({ children }) => { // See https://github.com/shuding/nextra/discussions/1508#discussioncomment-4990229
    const { frontMatter } = useConfig();
    return (
      <SessionProvider>
        <main className="">
          <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight">
            {frontMatter?.title}
          </h1>
          <p>{frontMatter?.description}</p>
          <div className="">{children}</div>
        </main>
      </SessionProvider>
    );
  },
}*/

export default withNextra({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})