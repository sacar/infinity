import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/shared/banner";
import Services from "../data/services";
import dummy from "../images/slider3.jpg";

function ServicesPage() {
  var LaptopRepair = [
    "LCD Display Panel",
    "Keyboard Replacement",
    "Laptop water damage",
    "Battery Replacement",
    "Laptop data recovery",
    "Motherboard Repair",
    "Cracked hinges or Panels",
    "Power Adapter Replacement",
  ];
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="mt-12 sm:mt-12 md:mt-6 w-full">
        <Banner page={"Home / Services"} />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-rows-4 md:grid-rows-3 grid-cols-4 md:grid-flow-col gap-4">
            <div className="row-start-4 col-span-4 md:col-span-1 md:row-span-3">
              <div className=" bg-orange-100 p-2">
                <div className="bg-white px-2 py-4">
                  <h1 className="font-medium text-base px-2 py-2">
                    Repair Services
                  </h1>
                  {Services.map((service) => (
                    <div
                      className="flex justify-between items-center hover:text-indigo-600 focus:text-indigo-600 text-gray-700 text-sm px-2 py-3 border-b  hover:border-indigo-600 border-gray-200"
                      key={service.type}
                    >
                      <span className="text-indigo-900">{service.type}</span>

                      <svg
                        className="h-5 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row-start-1 row-span-1 col-span-4 md:col-span-3 ">
              <img src={dummy} alt="dummy"></img>
            </div>
            <div className="row-start-2 row-span-2 col-span-4 md:col-span-3 space-y-6">
              <h1 className="text-2xl font-semibold text-indigo-900">
                Need Fast Laptop and Hardware Repairs?
              </h1>
              <p className="text-base text-gray-700">
                Laptops can come in all different shapes and sizes. From timid,
                but reliable business tools to crazy computing power that would
                rival most supercomputers only about half a decade ago psums
                necerat in ultrices aesent vestibulum sapien in molestie.
              </p>
              <p className="text-base text-gray-700">
                Maecenas tincidunt urna ac pulvinar commod aecenas convallis
                mattis misitamet ullamcorp auris pretium venenatis eros quis
                molestien necurna musce fringilla lacus nmollis. Curabitur lacus
                justo, lacinia in viverra eu, pharetra a odio. Donec suscipit
                mauris congue, sollicitudin sem id, porta leo. Mauris eu iaculis
                velit, eu dignissim lorem.
              </p>
              <p className="text-base text-gray-700">
                Our fixit laptop repair experts can fix any hardware related
                issues for your laptop - guaranteed or you won’t pay a cent!
              </p>
              <h2 className="text-xl font-semibold text-indigo-900">
                Our Hardware And Laptop Repair Services
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {LaptopRepair.map((point, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center space-x-2"
                  >
                    <div className="h-4 w-4 flex justify-center items-center bg-indigo-600 rounded-full">
                      <span className="h-2 w-2 bg-white rounded-full"></span>
                    </div>
                    <span className="font-normal text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServicesPage;
