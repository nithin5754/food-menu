import { IoCall } from "react-icons/io5";
import { PiNavigationArrow } from "react-icons/pi";
import companyTitle from '../assets/companytitle.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <footer className="bg-black w-full   text-white py-6">
      <div className="container mx-auto ">
        <div className="flex flex-col w-[90%] md:flex-row justify-center items-center gap-9 md:gap-12 mx-auto">

          <div className="border border-gray-600 p-6 rounded-xl text-center w-full md:w-80 h-[150px]">
            <h3 className="text-blue-500 text-lg font-semibold uppercase mb-4">Connect With Us</h3>
            <p className="flex items-center justify-center gap-2">
             <IoCall/> +91 9567834340
            </p>
            <p className="flex items-center justify-center gap-2">
              ✉️ info@deepnetsoft.com
            </p>
          </div>

     
          <div className="relative border border-gray-600 p-6 rounded-xl text-center flex flex-col justify-center w-full md:w-80 h-[150px] ">

      <div className="absolute top-[-22%] left-0 right-0  w-[56px] h-[48px] mx-auto">
        <img
          src={companyTitle}
          className="w-full h-full object-contain"
          alt="DeepNetSoft Logo"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-blue-500 text-lg font-semibold uppercase">DEEP NET SOFT</h3>
        
        <div className="flex justify-center gap-4 text-gray-400 text-xl">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>

        
          <div className="border border-gray-600 p-6 rounded-xl text-center w-full md:w-80 h-[150px]">
            <h3 className="text-blue-500 text-lg font-semibold uppercase mb-4">Find Us</h3>
            <p className="flex items-center justify-center gap-2">
           <PiNavigationArrow/> First Floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
