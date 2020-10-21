import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/shared/banner";
function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="mt-12 sm:mt-12 md:mt-6 w-full">
        <Banner page={"Home / Contact"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto py-16 px-6 sm:px-10 md:px-20">
          <form className="col-span-2">
            <h1 className="text-indigo-900 text-2xl font-semibold">
              Get In Touch With Infinity
            </h1>
            <p className="mb-8 leading-loose text-gray-700 text-lg">
              Simply complete the enquiry form and We will respond as soon as we
              can.
            </p>

            <label className="block mb-2 text-base font-medium" htmlFor="name">
              Name
            </label>

            <input
              className="w-full mb-6 form-input"
              id="name"
              placeholder=""
              type="text"
            />

            <label
              className="block mb-2 text-base font-medium "
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="w-full mb-6 form-input"
              id="email"
              placeholder=""
              type="text"
            />

            <label
              className="block mb-2 text-base font-medium "
              htmlFor="subject"
            >
              Subject
            </label>

            <input
              className="w-full mb-6 form-input"
              id="subject"
              placeholder=""
              type="text"
            />
            <label
              className="block mb-2 text-base font-medium "
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className="w-full mb-6 form-textarea"
              id="message"
              placeholder=""
              rows="8"
            />

            <button className="px-4 py-2 text-sm font-bold text-white bg-indigo-700 rounded hover:border-indigo-700 hover:bg-indigo-600">
              Submit
            </button>
          </form>
          <div className="flex flex-col md:flex-row lg:flex-col justify-start md:justify-between lg:justify-start items-start w-full space-y-8 md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-8">
            <div className="bg-orange-100 p-4">
              <div className="bg-white rounded  p-6  flex flex-col justify-start items-start space-y-1">
                <h4 className="text-xl font-medium text-indigo-900 pb-4">Address</h4>
                <span>Devkota Road, Baneshwor</span>
                <span>Kathmandu,</span>
                <span>Nepal</span>
              </div>
            </div>
            <div className="bg-orange-100  p-4">
              <div className="bg-white rounded p-6 flex flex-col justify-start items-start space-y-1">
                <h4 className="text-xl font-medium text-indigo-900 pb-4">Address</h4>
                <span>Devkota Road, Baneshwor</span>
                <span>Kathmandu,</span>
                <span>Nepal</span>
              </div>
            </div>
            <div className="bg-orange-100 p-4">
              <div className="bg-white rounded p-6  flex flex-col justify-start items-start space-y-1">
                <h4 className="text-xl font-medium text-indigo-900 pb-4">Address</h4>
                <span>Devkota Road, Baneshwor</span>
                <span>Kathmandu,</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
