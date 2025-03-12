import companyTitle from '../assets/companytitle.png';

const CompanyLogo = () => {
  return (
    <div className="absolute top-[-20px] left-20">
      <div className="flex gap-2 w-[300px] items-center">
    
        <div className=" w-[56px] h-[48px] flex">
          <img
            src={companyTitle}
            className="hidden md:block w-full h-full object-contain"
            alt="DeepNetSoft Logo"
          />
        </div>

      
        <div className=" flex flex-col leading-none font-normal">
          <p className="hidden md:block text-2xl md:text-[35px] text-[#0796EF] ">
            DEEP <span className="text-white">NET</span>
          </p>
          <p className="hidden md:block text-2xl md:text-[35px] text-[#857878]">SOFT</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
