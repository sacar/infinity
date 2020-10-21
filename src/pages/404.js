import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import notFoundIllustration from "../images/not_found.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="my-12">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={notFoundIllustration}
        />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
