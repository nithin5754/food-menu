import { FC, ReactElement } from "react";
import { IMenuCategoryDetailsProps } from "../pages/Menu";



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
    
    <div className="absolute inset-0 w-full  md:top-0 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="text-white w-full max-w-6xl mx-auto">
        <div className="mx-auto w-full border border-gray-600 p-3 sm:p-4 md:p-6 rounded-md bg-opacity-50">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4 uppercase">
            <div className="drop-shadow-[1px_1px_1px_red] flex items-center justify-center">
              <span className="flex-1 border-b border-white mx-2 md:mx-4 drop-shadow-[1px_1px_1px_white]"></span>
              <span className="px-2 md:px-4 whitespace-nowrap">{data.description.toUpperCase()}</span>
              <span className="flex-1 border-b border-white mx-2 md:mx-4 drop-shadow-[1px_1px_1px_white]"></span>
            </div>
          </h2>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mx-auto w-full">
            {data.items.map((item) => (
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
  </div>
  )
};
export default MenuCategoryDetails;
