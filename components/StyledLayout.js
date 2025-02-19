import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { pageMap } from "../components/Constants";

const banner = <Banner storageKey="quantera">Quantera.AI 2.0 is released 🎉</Banner>;
const navbar = <Navbar logo={<b>Quantera.AI</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Quantera.AI.</Footer>;

export default function StyledLayout({ children }) {
  return (
    <Layout
    banner={banner}
    navbar={navbar}
    pageMap={pageMap}
    footer={footer}
    >
      {children}
    </Layout>
  );
}