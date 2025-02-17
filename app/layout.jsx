import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="quantera">Quantera.AI 2.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Quantera.AI</b>}
    // ... Your additional navbar options
  /> 
)
const footer = <Footer>MIT {new Date().getFullYear()} © Quantera.AI.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          // ... Your additional layout options

    sidebar={{
    defaultMenuCollapseLevel: 1,/*
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
    ],*/
  }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}