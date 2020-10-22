import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Features from "../components/features";
import Repair from "../components/repair";
import Stats from "../components/stats";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import GeneralInfo from "../components/generalinfo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <main className=" sm:pt-0  mt-12 md:mt-6 w-full  space-y-16 ">
        <Hero />
        <div className="max-w-6xl mx-auto  px-4 space-y-16">
          <Features />
          <Repair />
        </div>
        <Stats />
        <div className="max-w-6xl mx-auto ">
          <Services />
        </div>
        <div>
          <Testimonials />
          <GeneralInfo />
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
