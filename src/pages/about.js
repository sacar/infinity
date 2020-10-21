import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import team from "../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import team1 from "../images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import team2 from "../images/ronny-sison-4lnzxFIgTmg-unsplash.jpg";
import team3 from "../images/ben-parker-OhKElOkQ3RE-unsplash.jpg";
import Banner from "../components/shared/banner";

function AboutPage() {
  var teams = [
    {
      id: 1,
      name: "Michael Dam",
      title: "Owner",
      image: team,
    },
    {
      id: 2,
      name: "Joseph Gonzalez",
      title: "Technical Support",
      image: team1,
    },
    {
      id: 3,
      name: "Ronny Sison",
      title: "Service Manager",
      image: team2,
    },
    {
      id: 4,
      name: "Ben Parker",
      title: "Finance Head",
      image: team3,
    },
  ];
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
                <div
                  key={member.id}
                  className="bg-orange-100  rounded-sm p-4 overflow-hidden flex-1 flex flex-col"
                >
                  <img src={member.image} alt="team" />
                  <div className="p-4 flex-1 flex flex-col items-center">
                    <h3 className="mb-1 text-xl font-medium text-center text-indigo-900">
                      {member.name}
                    </h3>
                    <h4 className="text-xs tracking-wide font-normal text-center text-gray-600">
                      {member.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
