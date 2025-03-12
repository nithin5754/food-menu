import { useState } from "react"
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import MenuCategoryDetails from "../components/MenuCategoryDetails"
import SubBanner from "../components/SubBanner"
import data from "../utility/menus"

export interface IMenuCategoryDetailsProps {
  id: number;
  name: string;
  description: string;
  items: { id: number; name: string; description: string; price: number }[];
}
const Menu = () => {
  const [menus,_setmenus]=useState<IMenuCategoryDetailsProps[]>(data)
  const [category,setCategory]=useState<number>(menus[0].id)

  const handleCategory =(categoryId:string)=>{
console.log("categoryid",categoryId)
  const isExisted=menus.some((menu:IMenuCategoryDetailsProps)=>menu.id===Number(`${categoryId}`))
  console.log("isExisted",isExisted)
  if(isExisted){
    setCategory(Number(`${categoryId}`))
  }
  }

  const selectedCategory :IMenuCategoryDetailsProps=menus.find((menu:IMenuCategoryDetailsProps)=>menu.id===category) as IMenuCategoryDetailsProps

  return (
    <div className="bg-(--color-customDark)   mx-auto flex flex-col items-center">
     <Banner/>
     <SubBanner data={menus} handleCategory={handleCategory}  />
     <MenuCategoryDetails data={selectedCategory}/>
     <Contact/>
   </div>
  )
}
export default Menu