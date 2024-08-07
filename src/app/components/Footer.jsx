import React from "react";
import EmailIcon from "../../../public/email-footer.svg";
import PhoneIcon from "../../../public/phone-footer.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="flex flex-col items-start text-slate-100">
          <p className="flex flex-row">
            <p className="flex flex-row gap-2">
              <Image src={EmailIcon} />
              <div>:</div>
            </p>
            <a
              href="mailto:andrey.vorob1995@gmail.com"
              className="hover:text-blue-600 ml-4"
            >
              andrey.vorob1995@gmail.com
            </a>
          </p>
          <p className="flex flex-row">
            <p className="flex flex-row gap-2">
              <Image src={PhoneIcon} />
              <div>:</div>
            </p>
            <a href="tel:+14156911018" className="hover:text-blue-600 ml-4">
              +1 (415) 691-1018
            </a>
          </p>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
