"use client";

import Image from "next/image";
import { RxHome, RxCalendar, RxBarChart } from "react-icons/rx";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import { Route } from "./Route";
import { SubRoutes } from "./SubRoutes";
import { useAuth } from "@/contexts/AuthContextProvider";

import logo from "../../../assets/logo.png";

function RouteWrapper({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export function Sidebar() {
  const { signOut } = useAuth();

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
          <RouteWrapper>
            <Route icon={RxHome} routeName="Dashboard" path="/" />
          </RouteWrapper>
          <li className="px-2 py-3 text-white">
            <SubRoutes menuName="Calendarios" menuIcon={RxCalendar}>
              <Route
                icon={AiOutlineGlobal}
                routeName="Global"
                path="/calendar"
              />
              <Route
                icon={RxBarChart}
                routeName="Semestral"
                path="/calendar/semestral"
              />
              <Route
                icon={RxBarChart}
                routeName="Bimestral"
                path="/calendar/bimestral"
              />
            </SubRoutes>
          </li>
          <li className="px-2 py-3 text-white">
            <SubRoutes menuName="Planos" menuIcon={RxCalendar}>
              <Route
                icon={RxBarChart}
                routeName="Diarios"
                path="/plans/daily"
              />
              <Route
                icon={RxBarChart}
                routeName="Annuais"
                path="/plans/yearly"
              />
            </SubRoutes>
          </li>
        </ul>
        <div className="p-5 mt-auto flex gap-5 justify-center items-center border-t-[1px] border-t-zinc-500/75">
          <button
            className="outline-none border-none bg-transparent"
            onClick={signOut}
          >
            <AiOutlinePoweroff className="text-white" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
