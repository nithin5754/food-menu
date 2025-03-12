import { FC, ReactElement } from "react";
import { IMenuCategoryDetailsProps, IMenuItemsProps } from "../pages/Menu";
import { FaBeer, FaCocktail, FaCoffee } from "react-icons/fa";
import { GiChickenLeg, GiChopsticks, GiNoodles } from "react-icons/gi";



const MenuCategoryDetails: FC<{ data: IMenuCategoryDetailsProps }> = ({
  data,
}): ReactElement => {
  return (
    <div className="relative w-full min-h-[300px] md:h-[400px] ">
    <img
      alt={'categories'}
      className=" md:h-full w-full object-cover transition"
      src="https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cyaeUky8SXIqVgNLJDHHYhI4AsGR406ZzdB-PWz2snSFQf1kbu-q--fB1q3InXlzoHG9SVFo4nwJxKG41x2uOJNqDtwWIKa6enu~LNsukQKQA6ktlSarcxcws2wWnSbUESvudvfKl7zsic0g8v0bBOBtR2svIpU63Qt2HPgfT9Y0hmxHxxolr5pFXHI78kskxpzjBk-idIfBGjb3oTgEH8gsHw~BMOc2hoayh7JNdYrj7cWGfoi-6EzbTdGkwHdoJIXzQ9OIbcvHTJn8YC5MoA9dnr4Lxo1qILYgwo12phzF5v4ma~qAfKGn2rvk2ZRQKMbNfjJC7VA8z4VbrwJZwg__"
    />
    <div className="absolute hidden md:flex top-0  flex-col gap-8  opacity-30">
      <FaCoffee className="p-4 w-[100px] h-[100px] text-[#808080]" />
      <FaBeer className="p-4 w-[100px] h-[100px] text-[#808080]" /> 
      <FaCocktail className=" p-4 w-[100px] h-[100px] text-[#808080]" />
    </div>
    
    <div className="absolute inset-0 w-full  md:top-0 flex flex-col items-center justify-center p-2 sm:p-4">   
       <div className="absolute hidden md:block top-[-45%] left-0 w-[200px]">
        <img src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Np7tULeEJ8Crr1vkRftN0oQf9jH58MpK9f6ClLhO1yrEH4oOhAykIHN25~z4NgMOvezreuYygjt3CJc9bEwkIFB0-G1h1zWzSOedgQ0gD53WOC8VAfEt-~TKUfhX1C-Ur6W7V2lp5ZFlVHOdiZptDbZdYqCYAzP9AH8yynv7NLmx0yN37b3QJ0h8VnvPR5TIPUynXLr7fX4djh5ohxIsqF-qh0TlkHCl3vG7kRMQAOh~pSHYjLnMAcP64hSq8~rd6Wa0zQOZNKVcglSLwEbpY61K0Uy321Ip1v85dhiDMg2ICfsB-bYtCOpVwHmFcliuYSngQc7~rkkcjHEN27TigQ__" alt="img-1" className="object-cover w-full" />
      </div>
      <div className="text-white w-full max-w-6xl mx-auto">
        <div className="mx-auto w-full border-2 border-gray-600 p-3 sm:p-4 md:p-6 rounded-md bg-opacity-50">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4 uppercase">
            <div className="drop-shadow-[1px_1px_1px_red] flex items-center justify-center">
              <span className="flex-1 border-b border-white mx-2 md:mx-4 drop-shadow-[1px_1px_1px_white]"></span>
              <span className="px-2 md:px-4 whitespace-nowrap">{data?.description.toUpperCase()}</span>
              <span className="flex-1 border-b border-white mx-2 md:mx-4 drop-shadow-[1px_1px_1px_white]"></span>
            </div>
          </h2>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mx-auto w-full">
            {data&&data.items&&data.items.length>0&&data.items.map((item:IMenuItemsProps) => (
              <li key={item.id} className="mb-2 md:mb-4">
                <div className="flex justify-between text-xs sm:text-sm md:text-lg lg:text-xl border-gray-600 pb-1">
                  <span className="font-semibold truncate mr-2">{item.name}</span>
                  <span className="flex-grow border-dotted border-b border-white mx-1 md:mx-2"></span>
                  <span className="font-semibold whitespace-nowrap">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2 md:line-clamp-none">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
    </div>
    <div className="absolute hidden md:block  bottom-[-10%] right-[5%] w-[200px]">
        <img src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RnXswkM93X5PCLFvt4pTm5wv9P-o2UeU7iiu8dNrfne3Te8VRuPvZjHuHOe84eeHPV4wPuT9E8JDbrHjOiInmTex5qC6~qk6xOtMdgdHesfI3~wzHRdzrV9WKEadBvpvSjpy~0CID0LVtUDROs7nCgHxRdFFp15ptfEd1WgrUKwILdvgssuKR3T4EOeLtJ7i9qNBunIlSnLwhdQUu8zdcl0edUsd-04h2O6jzbkjLu01NV-GlLYD1x9M3~DsV-9bKNJ95weo1A-6zrRj4s89As-hUe3-8qYLeedQ~t4bGKr6Mgt2fLHQk7yzOnWMuQf~XsHI85QoWz-ytVjsAJl~8w__" alt="img-2" className="object-cover w-full"/>
      </div>
    <div className="absolute top-0 right-0 hidden md:flex flex-col gap-8  opacity-30">
      <GiNoodles  className="p-4 w-[100px] h-[100px] text-[#808080]" />
      <GiChickenLeg   className="p-4 w-[100px] h-[100px] text-[#808080]" /> 
      <GiChopsticks  className=" p-4 w-[100px] h-[100px] text-[#808080]" />
    </div>
    
  </div>
  )
};
export default MenuCategoryDetails;
