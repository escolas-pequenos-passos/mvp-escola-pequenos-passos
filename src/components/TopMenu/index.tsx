"use client";

import { RxBell } from "react-icons/rx";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

const statusMapper = {
  success: "bg-green-700",
  fail: "bg-red-700",
  process: "bg-yellow-700",
};

function Notification({
  status = "process",
}: {
  status?: keyof typeof statusMapper;
}) {
  return (
    <div className="flex items-center gap-5 p-2">
      <div className={`h-2 w-2 rounded-full ${statusMapper[status]}`} />
      <p className="flex-1 text-xs text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        eveniet eius similique perferendis alias.
      </p>
    </div>
  );
}

export function TopMenu() {
  return (
    <div className="w-full px-5 py-4 border-b-[1px] border-b-dark-blue/20">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-zinc-900">
          Escola Pequenos Passos
        </span>
        <div className="flex items-center gap-5">
          <Popover>
            <PopoverTrigger>
              <RxBell />
            </PopoverTrigger>
            <PopoverContent>
              <ScrollArea className="max-w-[300px] h-60">
                <Notification status="fail" />
                <Notification status="success" />
                <Notification status="success" />
                <Notification status="fail" />
                <Notification status="fail" />
                <Notification status="process" />
                <Notification status="success" />
              </ScrollArea>
            </PopoverContent>
          </Popover>

          <span className="text-xs font-light text-zinc-900 hover:cursor-pointer hover:underline hover:text-blue-800">
            user@email.com
          </span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
