"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {GiTwoCoins} from "react-icons/gi";
import {RiHandCoinLine} from "react-icons/ri";

const SocialLogo = ["/discord.png", "/telegram.png", "/twitter.png"];

export const Sidebar = ({active}: {active?: "sale" | "claim"}) => {
  const router = useRouter();
  const activeStyle =
    "border-l-[3px] border-s-[#08E04A]  rounded-bl-[8px] rounded-tl-[8px] border-0 h-[48px] bg-[#000000]";

  const handleClick = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <div className="w-[15%] h-screen sm:hidden">
      <div className="bg-[#101010] h-[85%] pl-[20px] pt-[40px]">
        <div className="px-[10px] cursor-pointer">
          <Image src="/logo.png" width={13} height={21} alt="logo" />
        </div>
        <ul className="w-[100%] mt-[60px] flex flex-col text-[12px] font-[600] cursor-pointer">
          <li
            className={`w-[100%] flex gap-[10px] items-center h-[48px]  pl-[10px] ${
              active === "sale" && activeStyle
            }`}
            onClick={() => handleClick("dashboard")}
          >
            <GiTwoCoins
              className={` ${active === "sale" && "text-[#08E04A]"}`}
            />
            <span>Token Sale</span>
          </li>
          <li
            className={`w-[100%] flex gap-[10px] items-center h-[48px] pl-[10px] ${
              active === "claim" && activeStyle
            }`}
            onClick={() => handleClick("claim")}
          >
            <RiHandCoinLine
              className={` ${active === "claim" && "text-[#08E04A]"}`}
            />
            <span>Claim Token</span>
          </li>
        </ul>
      </div>
      <div className="bg-[#101010] h-[14.5%] mt-[2%] py-[20px] pl-[20px]">
        <h3 className="text-[12px] font-[600]">Connect with us</h3>
        <div className="flex gap-[30px] mt-[15px]">
          {SocialLogo.map((img, index) => (
            <Image key={index} src={img} width={16} height={16} alt="socials" />
          ))}
        </div>
      </div>
    </div>
  );
};
