export default {
  logo: <span>My API Docs</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  repository: 'https://github.com/shuding/nextra', 
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', 
  navigation: true,
  navbar: {
    component: 'components/Navbar', // Path to your shadowed Navbar component
    // ... other navbar options if needed
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    items: [
      { title: "Introduction", href: "/" },
      { title: "API Documentation", href: "/docs" },
      { title: "Guides", href: "/guides" },
      { title: "Reference", children: [
        { title: "Getting Started", href: "/docs/getting-started" },
        { title: "Authentication", href: "/docs/authentication" },
        { title: "Endpoints", href: "/docs/endpoints" },
        { title: "Errors", href: "/docs/errors" }
      ]}
    ],
  },
};
