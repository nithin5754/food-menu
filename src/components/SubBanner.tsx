import { FC, ReactElement } from "react";
import Button from "./Button";

interface IMenuCategoryProps {
  data: any;
  handleCategory: (categoryId: string) => void;
}

const SubBanner: FC<IMenuCategoryProps> = ({
  data,
  handleCategory,
}): ReactElement => {
  return (
    <div className="relative  w-full flex  h-32  overflow-hidden bg-gray-900">
      <img
        src="https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ADLrsmOEkJwrC-6vjBJ~fnhmTXH88bhxsqDvajecAsu8P37R2xM26kqfqosoH70UIpWL1SUt-Yq8AwwGMXtO0m78DVIQajHEMnzR~1AqpNusz41Bp544BrxQq3bl39PH3doQhDUSgGVMmByHsFGWD8tsnaSrTF6uIOetF8bpbqRjNWessMTdQnzs9dSh-Ips5afuFj0pf~InNyrdDZ69L8CzVMATBLHFh~fAdb6g8xkxMU~y5GUn33zHPSy162z06fU0tQcgKdixDO2loIVAF7pWkMxlPbFOhz~4NHaLvx1xMzVwoK20iACcv-jEDBI0ehAAY5epc77nkorW7zG~VQ__"
        alt="Banner"
        className="w-full object-cover transition-all duration-300"
      />
      <img
        src="https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ADLrsmOEkJwrC-6vjBJ~fnhmTXH88bhxsqDvajecAsu8P37R2xM26kqfqosoH70UIpWL1SUt-Yq8AwwGMXtO0m78DVIQajHEMnzR~1AqpNusz41Bp544BrxQq3bl39PH3doQhDUSgGVMmByHsFGWD8tsnaSrTF6uIOetF8bpbqRjNWessMTdQnzs9dSh-Ips5afuFj0pf~InNyrdDZ69L8CzVMATBLHFh~fAdb6g8xkxMU~y5GUn33zHPSy162z06fU0tQcgKdixDO2loIVAF7pWkMxlPbFOhz~4NHaLvx1xMzVwoK20iACcv-jEDBI0ehAAY5epc77nkorW7zG~VQ__"
        alt="Banner"
        className="w-full  object-cover transition-all duration-300  scale-x-[-1]"
      />

      <div className="absolute inset-0  flex  flex-wrap gap-4  items-center justify-center p-4">
        {data.map((menu: any) => (
          <Button
            key={menu.id}
            name={menu.name}
            handleCategory={handleCategory}
            categoryId={`${menu.id}`}
          />
        ))}
      </div>
    </div>
  );
};
export default SubBanner;
