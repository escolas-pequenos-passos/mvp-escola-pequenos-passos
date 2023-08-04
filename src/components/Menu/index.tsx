"use client";

import { RxHome, RxCalendar, RxBarChart } from "react-icons/rx";
import { MenuRoute } from "./MenuRoute";
import { SubMenu } from "./SubMenu";

export function Menu() {
  return (
    <nav className="h-screen w-72 bg-zinc-900">
      <div className="h-full p-5">
        {/* header */}
        <div className="flex items-center justify-center w-full">
          <h1 className="text-lg font-semibold text-white">Menu</h1>
        </div>

        {/* router */}
        <ul className="mt-8 space-y-3">
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
      </div>
    </nav>
  );
}
