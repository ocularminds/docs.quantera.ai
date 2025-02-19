import { Footer, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import SessionWrapper from "../components/SessionWrapper";
import "nextra-theme-docs/style.css";
import { CustomLayout } from "../components/CustomLayout";

export const metadata = {
  // Define your metadata here
};

const banner = <Banner storageKey="quantera">Quantera.AI 2.0 is released 🎉</Banner>;
const navbar = <Navbar logo={<b>Quantera.AI</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Quantera.AI.</Footer>;

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();
  console.log('page map', pageMap);
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
      <SessionWrapper>
        <CustomLayout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </CustomLayout>
        </SessionWrapper>
      </body>
    </html>
  );
}