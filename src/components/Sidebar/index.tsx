"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AiOutlineLeft,
  AiOutlinePoweroff,
  AiOutlineRight,
} from "react-icons/ai";

import { useAuth } from "@/contexts/AuthContextProvider";
import { cn } from "@/lib/utils";
import { Routes } from "./Routes";

import logo from "../../../assets/logo.png";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { signOut } = useAuth();

  return (
    <nav
      className={cn(`h-full bg-zinc-900 relative transition-all w-72`, {
        "w-24": isCollapsed,
      })}
    >
      <button
        onClick={() => setIsCollapsed((old) => !old)}
        className="absolute top-14 -right-3 w-7 h-7 flex items-center justify-center rounded-full bg-light-green"
      >
        {isCollapsed ? (
          <AiOutlineRight className="text-gray-600" size={16} />
        ) : (
          <AiOutlineLeft className="text-gray-600" size={16} />
        )}
      </button>
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-lg font-semibold text-white">
            <Image
              src={logo}
              width={isCollapsed ? 40 : 50}
              height={isCollapsed ? 40 : 50}
              alt="Logo pequenos passos"
            />
          </h1>
        </div>

        <Routes isCollapsed={isCollapsed} />

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
