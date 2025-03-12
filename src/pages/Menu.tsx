import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import MenuCategoryDetails from "../components/MenuCategoryDetails";
import SubBanner from "../components/SubBanner";

import axios from "axios";
import { BASE_URL } from "../utility/constants";

export interface IMenuItemsProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IMenuCategoryDetailsProps {
  id: string;
  name: string;
  description: string;
  items: IMenuItemsProps[];
}

const Menu = () => {
  const [menus, setMenus] = useState<IMenuCategoryDetailsProps[] | []>([]);

  const [category, setCategory] = useState<string>("");

  const getAllMenus = async () => {
    try {
      const response = await axios.get(BASE_URL + "/get/all/menus");
      setMenus(response?.data?.data);
      setCategory(response.data?.data[0]?.id);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
    getAllMenus();
  }, []);

  const handleCategory = (categoryId: string) => {
    const isExisted: boolean = menus.some(
      (menu: IMenuCategoryDetailsProps) => menu.id === `${categoryId}`
    );

    if (isExisted) {
      setCategory(`${categoryId}`);
    }
  };

  const selectedCategory: IMenuCategoryDetailsProps = menus.find(
    (menu: IMenuCategoryDetailsProps) => menu.id === category
  ) as IMenuCategoryDetailsProps;

  return (
    <div className="bg-(--color-customDark)   mx-auto flex flex-col items-center">
      <Banner />
      <SubBanner data={menus} handleCategory={handleCategory} />
      <MenuCategoryDetails data={selectedCategory} />
      <Contact />
    </div>
  );
};
export default Menu;
