import React from "react";
import EmailIcon from "../../../public/email-footer.svg";
import PhoneIcon from "../../../public/phone-footer.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start text-slate-100">
          <div className="flex flex-row gap-2">
            <Image src={EmailIcon} />
            <div>:</div>
            <a
              href="mailto:andrey.vorob1995@gmail.com"
              className="hover:text-blue-600 ml-4"
            >
              andrey.vorob1995@gmail.com
            </a>
          </div>
          <div className="flex flex-row gap-2 mt-4 md:mt-0">
            <Image src={PhoneIcon} />
            <div>:</div>
            <a href="tel:+14156911018" className="hover:text-blue-600 ml-4">
              +1 (415) 691-1018
            </a>
          </div>
        </div>
        <p className="text-slate-600 mt-4 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
