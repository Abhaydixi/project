import React from "react";
import Typed from "react-typed";
// import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className="bg-white w-full py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[1240px] p-4 mx-auto md:grid grid-cols-2">
            <div className="col-span-1 md:w-[80%] py-4">
              <h1 className="font-bold text-xl md:text-4xl">
                <Typed
                  strings={["Ease of Doing Taxation, iTaxEasy.|"]}
                  typeSpeed={100}
                  loop={true}
                  backSpeed={80}
                />
              </h1>
              <p className="mt-3">
                Download The App For Better Tax Filing Experience
              </p>
              <button className="bg-black text-white p-2 rounded mt-3">
                Fill you itr free
              </button>
            </div>
            <div className="col-span-1 border border-[blue] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
              deserunt itaque natus hic maiores recusandae architecto possimus
              aliquam vel. Assumenda tempora ut modi odit. Alias, labore?
              Eveniet, quo doloribus!
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <h1 className="text-center font-bold text-xl md:text-4xl">
          Our Services
        </h1>
        <div className="py-[100px] px-2">
          <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-3 h-[350px] ">
            <div className="shadow-lg rounded-lg overflow-hidden md:mx-2 flex-grow flex-shrink-0 my-4  hover:scale-105 duration-500">
              <h4 className="text-center text-lg py-5 bg-black text-white font-semibold">
                For Individuals
              </h4>
              {/* <div className="flex flex-col py-3">
                <img className="h-10 " src="img/per.png" alt="" />
                <span className="ml-3 font-semibold whitespace-nowrap">
                  Easy ITR
                </span>
              </div> */}
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden md:mx-2 flex-grow flex-shrink-0 my-4 hover:scale-105 duration-500">
              <h4 className="text-center text-lg py-5 bg-black text-white font-semibold">
                For Enterprises
              </h4>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden md:mx-2 flex-grow flex-shrink-0 my-4 hover:scale-105 duration-500">
              <h4 className="text-center text-lg py-5 bg-black text-white font-semibold">
                For Tax Experts
              </h4>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden md:mx-2 flex-grow flex-shrink-0 my-4 hover:scale-105 duration-500">
              <h4 className="text-center text-lg py-5 bg-black text-white font-semibold">
                For SMEs
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sticky top-20 z-10 px-2 ">
        <ul className="max-w-7xl mx-auto flex items-stretch justify-between overflow-hidden bg-zinc-200 md:rounded-full shadow">
          <li className="flex text-slate-900 items-center justify-center w-full border-b-4 mt-1 mx-2 py-3 font-semibold text-center cursor-pointer text-sm border-[primary]">
            GST
          </li>
          <li className="flex text-slate-900 items-center justify-center w-full border-b-4 mt-1 mx-2 py-3 font-semibold text-center cursor-pointer text-sm">
            Income Tax Links
          </li>
          <li className="flex text-slate-900 items-center justify-center w-full border-b-4 mt-1 mx-2 py-3 font-semibold text-center cursor-pointer text-sm">
            ITR
          </li>
          <li className="flex text-slate-900 items-center justify-center w-full border-b-4 mt-1 mx-2 py-3 font-semibold text-center cursor-pointer text-sm">
            Aaadhar
          </li>
          <li className="flex text-slate-900 items-center justify-center w-full border-b-4 mt-1 mx-2 py-3 font-semibold text-center cursor-pointer text-sm">
            Bank
          </li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto md:pb-20 relative">
        {/* GST start */}
        <div className="">
          <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap ">
            GST
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 ">
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-1 </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-3A </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-2B </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-3C </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-5 </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/gst1.png" alt="" />
                <span className="ml-2">GSTR-8 </span>
              </div>
              <p className="mt-4 px-3">
                Outward Supplies Are The Sales Of Goods & Services Furnished By
                All Registered Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* gst end */}

        {/* incomtax links */}

        <div className="">
          <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap ">
            Income Tax Links
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 ">
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy ITR Status </span>
              </div>
              <p className="mt-4 px-3">
                It Is The Current Status Of ITR That Has Been Filed. the Process
                Is Done By The Income Tax Department, If Any Issue Comes Up In
                The ITR. the Income Tax Department Will Communicate Itself.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy E-Pan </span>
              </div>
              <p className="mt-4 px-3">
                A Digitally Authenticated Pan Card Linked With Aadhar E-kyc In
                E-format Issued By The Income Tax Department. to Ease The
                Financial Transaction Of The Taxpayers.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy E-Verify Return </span>
              </div>
              <p className="mt-4 px-3">
                Verification In Time Is Must And Necessary. otherwise The Income
                Tax Return Is Treated As Invalid. your E-verification Is Quick
                And Instant With Us.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy E-Pay Tax </span>
              </div>
              <p className="mt-4 px-3">
                A Facility Provided By The Income Tax Department For The
                Taxpayer. by Which A Taxpayer Could Make Payment Through Various
                Online Banking Facilities.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Know TAN Details </span>
              </div>
              <p className="mt-4 px-3">
                Tax Deduction Account Number Or Tax Collection Account Number Is
                A 10 Digit Alpha-numeric Number Issued By The Income Tax
                Department.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Verify Your PAN </span>
              </div>
              <p className="mt-4 px-3">
                By providing your name you will know your pan details like
                Father's Name Date Of Birth
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Know Your AO </span>
              </div>
              <p className="mt-4 px-3">
                The Assessing Officer You Can Know Your AO by providing your Pan
                no here Ward, Range, City
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy PAN Details </span>
              </div>
              <p className="mt-4 px-3">
                Online Verification Of Pan Is A Simple Process. only The Details
                Of Pan Card Is Required.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* incom links end */}

        {/* itr start */}
        <div className="">
          <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap ">
            ITR
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 ">
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">ITR 1 </span>
              </div>
              <p className="mt-4 px-3">
                The Pre-filling And Filing Of Itr-1 Service Is Available To
                Registered Users On The E-filing Portal. This Service Enables
                Individual Taxpayers To File Itr-1
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">ITR 2 </span>
              </div>
              <p className="mt-4 px-3">
                This Service Enables Individual Taxpayers To File Itr-2 Online
                Through The E-filing Portal. This User Manual Covers Filing Of
                Itr-2 Through Online Mode.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">ITR 3 </span>
              </div>
              <p className="mt-4 px-3">
                The Itr-3 Is Applicable For Individual And Huf Who Have Income
                From Profits And Gains From Business Or Profession. The Persons
                Having Income ...
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">ITR 4</span>
              </div>
              <p className="mt-4 px-3">
                File ITR-4 (SUGAM) Online Faqs · Income Not Exceeding ₹ 50 Lakh
                During The FY · Income From Business And Profession Which Is
                Computed On A Presumptive Basis U/s ...
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* itr end */}

        {/* adhar start */}
        <div className="">
          <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap ">
            Aaadhar
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20  ">
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Link Aadhaar </span>
              </div>
              <p className="mt-4 px-3">
                To Link The Pan Card With Aadhar Details Such As Aadhaar Number,
                Name, Mobile Number And Date Of Birth Are Required.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Link Aadhaar </span>
              </div>
              <p className="mt-4 px-3">
                To Link The Pan Card With Aadhar Details Such As Aadhaar Number,
                Name, Mobile Number And Date Of Birth Are Required.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* adhar end */}

        {/* bank star */}
        <div className="">
          <h4 className="border-b my-2 text-slate-900 text-2xl font-semibold text-center mt-16 mb-10 flex-wrap ">
            Bank
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20  ">
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Bank Statement </span>
              </div>
              <p className="mt-4 px-3">
                A Statement Or A Summary Of Bank Transactions Of Each Month.it
                Shows The Income Flow Of A Bank Account.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Bank IFSC </span>
              </div>
              <p className="mt-4 px-3">
                A Facility Provided By The Rbi To Bank Branches For Fund
                Transfer Through Rtgs, Cfms And Neft. a 11-digit Alphanumeric
                Code Known As The Indian Financial System Code.
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
            <div className=" shadow-lg rounded-lg overflow-hidden mx-8 md:mx-5 h-full flex flex-col mb-5 flex-wrap ">
              <div className="flex items-center px-5 text-lg py-5 bg-black text-white font-semibold">
                <img className="h-10" src="img/itr.png" alt="" />
                <span className="ml-2">Easy Bank Verify </span>
              </div>
              <p className="mt-4 px-3 ">
                Verification Of Information For Opening A Bank Account. It Is
                Necessary For Safe And Secure Transaction Of Funds
              </p>
              <button className="w-[30%] item-center bg-black text-white p-2 rounded mt-3 ml-3">
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* bank end */}
      </div>
    </>
  );
}

export default Banner;
