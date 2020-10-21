import PropTypes from "prop-types";
import React from "react";

import NavBar from "./navbar/navbar";
import menus from "../data/navigationMenus";
import services from "../data/services"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar />

      <main className="flex-1 w-full  pt-8 mx-auto md:pt-16">{children}</main>

      <footer className="bg-gray-800">
        <nav className="  grid grid-cols-1 md:p-20 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl p-4 mx-auto text-sm text-gray-500">
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl text-white font-medium pb-4">INFINITY</h1>
            <p>
              We strive to help people by providing extraordinary service and
              expert repairs using only the highest quality parts available.
            </p>
            <p>
              We service all the newest and popular mobile phones, tablets and
              laptops. natis sed id nisl magna auris et neque sollicitudin
              ullamcorper fusce molestie felis mi id.Vestibulum venenatis sed id
              nisl magna suspendisse a mauris.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl text-white font-medium pb-4">CONTACT US</h1>
            <p>136 Kingston Road SW19 1LY Wimbledon London.</p>
            <p>
              Monday - Friday: 9am - 6pm <br></br>
              Saturday: 9am - 4pm
              <br></br>
              Sunday: Appointments only.
            </p>
            <p>Office: 0208-543-7088 <br></br>Mobile: 0-778-35-166-93</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl text-white font-medium pb-4">PAGES</h1>
            {menus.map((menu) => (
              <span key={menu.title}>{menu.title}</span>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl text-white font-medium pb-4">GET A REPAIR STARTED</h1>
            {services.map((service) => (
              <span key={service.type}>{service.type}</span>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
