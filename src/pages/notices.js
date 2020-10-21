import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import underconstructionIllustration from "../images/under_construction.svg";

function NoticesPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="my-12">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={underconstructionIllustration}
        />
      </div>
    </Layout>
  );
}

export default NoticesPage;