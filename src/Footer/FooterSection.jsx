import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { MdOutgoingMail } from "react-icons/md";
const FooterSection = () => {
  return (
    <div className=" bg-neutral text-neutral-content p-10 ">
      <div className="footer grid md:flex ">
        <div className="md:w-1/3 lg:w-1/5">
          <h1 className="text-2xl font-semibold">CS — Ticket System</h1>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid md:w-full md:grid-cols-2 md:space-y-20 lg:grid-cols-4 footer lg:justify-items-center ">
          <div className="space-y-3 text-xl">
            <h2 className="footer-title">Company</h2>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </div>
          <div className="space-y-3 text-xl">
            <h2 className="footer-title">Services</h2>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </div>
          <div className="space-y-3 text-xl">
            <h2 className="footer-title">Information</h2>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </div>
          <div className="space-y-3 text-xl">
            <h2 className="footer-title">Social Links</h2>
            <a className="link link-hover flex gap-2 justify-center items-center">
              <FaTwitterSquare />
              @CS — Ticket System
            </a>
            <a className="link link-hover flex gap-2 justify-center items-center">
              <AiFillLinkedin />
              T@CS — Ticket System
            </a>
            <a className="link link-hover flex gap-2 justify-center items-center">
              <CiFacebook />
              @CS — Ticket System
            </a>
            <a className="link link-hover flex gap-2 justify-center items-center">
              <MdOutgoingMail />
              support@cst.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-1 text-center text-xl p-3">
        <aside>
          <p className="mt-5">
            ©{new Date().getFullYear()} CS — Ticket System. All rights reserved.
            Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default FooterSection;
