import { FC, ReactElement } from "react"

const Button:FC<{name:string,categoryId:string,  handleCategory: (categoryId: string) => void}> = ({name,categoryId,handleCategory}):ReactElement => {
  return (
    <button type="button" className="max-w-[150px] min-w-[100px] py-[14px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:text-blue-700 focus:bg-blue-700  focus:z-10  focus:text-white text-center " onClick={()=>handleCategory(categoryId)}>{name}</button>
  )
}
export default Button