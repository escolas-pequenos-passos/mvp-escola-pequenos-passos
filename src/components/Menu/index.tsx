"use client";

import Image from "next/image";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiUserSmileLine } from "react-icons/ri";

import logo from "../../../assets/logo.png";

import { RxHome, RxCalendar, RxBarChart } from "react-icons/rx";
import { MenuRoute } from "./MenuRoute";
import { SubMenu } from "./SubMenu";

export function Menu() {
  return (
    <nav className="h-full w-72 bg-zinc-900">
      <div className="p-5 h-full flex flex-col">
        {/* header */}
        <div className="flex items-center justify-center w-full">
          <h1 className="text-lg font-semibold text-white">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo pequenos passos"
            />
          </h1>
        </div>

        {/* router */}
        <ul className="mt-8 space-y-3 h-2/3 overflow-y-auto">
          <MenuRoute icon={RxHome} routeName="Dashboard" />
          <li className="px-2 py-3 text-white">
            <SubMenu menuName="Calendarios" menuIcon={RxCalendar}>
              <MenuRoute icon={RxBarChart} routeName="Semestral" />
              <MenuRoute icon={RxBarChart} routeName="Bimestral" />
            </SubMenu>
          </li>
          <MenuRoute icon={RxBarChart} routeName="Planos diarios" />
          <MenuRoute icon={RxBarChart} routeName="Planos anuais" />
        </ul>
        <div className="p-5 mt-auto flex gap-5 justify-center items-center border-t-[1px] border-t-zinc-500/75">
          <AiOutlinePoweroff className="text-white" size={24} />
          <RiUserSmileLine className="text-white" size={24} />
        </div>
      </div>
    </nav>
  );
}
