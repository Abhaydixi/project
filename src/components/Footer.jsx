import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white  border-t pt-10 mt-5">
        <div className="max-w-7xl mx-auto pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row max-w-xl items-start justify-between">
              <img
                className="px-4 h-80 mx-auto md:m-0"
                src="img/img.png"
                alt=""
              />
              <div className="md:pl-10 mt-3 md:mt-0 px-5 md:px-0">
                <h4 className="font-bold text-xl"> Company Name</h4>
                <p className="text-sm font-medium mt-4">
                  India's Most Trusted Accounting And Financial Platform
                  Continuing The Legacy Of Accounting Firm N.S. Bedi And
                  Associates Since 1972.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between md:ml-auto mt-8 md:mt-0 ">
              <div className="mx-8 ">
                <h6 className="font-bold text-xl ">Links </h6>
                <ul className="font-medium text-sm leading-7 mt-4 my-2 ">
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Company Profile</li>
                  <li>Terms & Conditions</li>
                  <li>Disclaimer Policy</li>
                  <li>Software License</li>
                </ul>
              </div>
              <div className="mx-8">
                <h6 className="font-bold text-xl ">Offers </h6>
                <ul className="font-medium text-sm leading-7 mt-4 my-2">
                  <li className="hover:decoration-blue-400">Careers</li>
                </ul>
              </div>
              <div className="mx-8">
                <h6 className="font-bold text-xl">Contact Us </h6>
                <ul className="font-medium text-sm leading-7 mt-4 my-2">
                  <li>Contact us: 8840432011</li>
                  <li>dixitabhay633@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright  */}
      <div className="text-center p-4 bg-[gray] text-white">
        © Copyright 2023: Design by
        <span className="text-[#f80]"> Abhay Dixit</span>
      </div>
    </>
  );
}

export default Footer;
