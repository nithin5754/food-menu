import { FC, ReactElement } from "react";

const Banner: FC = (): ReactElement => {
  return (
    <div className="relative  md:h-[400px] w-full overflow-hidden bg-red-50">
      <img
        alt="banner"
        className="w-full  object-cover transition"
        src="https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U7VEtYaRl4LUfvlY5ky5CLLRLNp6n0Srab0aln1tEd18AMGCw5WhvlhK8WCVDMr6F~CRHN~FcWPT4bb4FEslhFELpTR6Vl5FR72jY2yXZ-4uG~sNYdYbu3IocrWKxC5oftSh4GclpwlCt0~-DuzUKTOU8IO~uQmpC7MEjRNarQcEkESK6jL8ImlDM6OUynI8OFYVD2lwRkqBCorDYzZ1Lfxpwk8pC~RnjHAWIQJtplDd8QBqvCpdGql~U3SGfd1Cw5v8tLkwPxlNI41vdT83vF-10Ne-qN2y8skurdPKSHoOBmdcaGS53DTgzUStt3ddYemaDKlEpDck8zbZb516eg__"
      />

      <div className="absolute inset-0 flex flex-col  items-center justify-center p-4">
        <h1 className="uppercase text-white text-[35px] md:text-[75px] font-[600] leading-[100%] tracking-[3%] drop-shadow-[2px_2px_5px_red] font-[Oswald]">
          MENU
        </h1>
        <p
          className="font-[Kelly Slab  max-w-[800px] text-[#BBBBBB] font-normal text-[10px] md:text-[18px] leading-[100%] tracking-[0%] text-center "
        >
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
};
export default Banner;
