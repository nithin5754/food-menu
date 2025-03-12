
import companyTitle from '../assets/companytitle.png'

const CompanyLogoMobile = () => {
  return (
    <div className="absolute w-[56px] h-[48px] top-3 ">
          <img
            src={companyTitle}
            className=" md:hidden w-full h-full object-contain"
            alt="DeepNetSoft Logo"
          />
        </div>
  )
}
export default CompanyLogoMobile