import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import teams from "../data/teams";
import Banner from "../components/shared/banner";
import ProfileCard from "../components/profileCard";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="mt-12 sm:mt-12 md:mt-6 w-full">
        <Banner page={"Home / About"} />
        <div className="max-w-6xl mx-auto w-3/5">
          <div className="flex flex-col justify-center  items-center py-12 space-y-6 ">
            <h1 className="text-3xl font-medium text-center text-indigo-900">
              Infinity Repair Professionals
            </h1>
            <p className="text-center text-gray-600">
              We are a team of dedicated professionals, ready to do what ever it
              takes to make your device problem solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
              {teams.map((member) => (
                <ProfileCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
