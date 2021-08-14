import * as React from "react";

import Footer from "../Footer";
import Header from "../Header";
import "../../styles/styles.scss";

type PageLayoutProps = {
  children: React.ReactNode;
  layout?: string;
};

const PageLayout = ({ children, layout }: PageLayoutProps) => (
  <>
    <Header />
    <main className={!!layout ? `page-layout--${layout}` : "page-layout"}>
      {children}
    </main>
    <Footer />
  </>
);

export default PageLayout;
