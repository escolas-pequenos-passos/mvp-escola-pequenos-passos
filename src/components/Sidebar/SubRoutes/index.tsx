import { ReactNode, useState, Children } from "react";
import { RxChevronUp } from "react-icons/rx";
import { IconType } from "react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface Props {
  menuName: string;
  menuIcon: IconType;
  children: ReactNode;
  isCollapsed?: boolean;
}

function SubRouteWrapper({
  isCollapsed = false,
  children,
}: {
  isCollapsed: boolean;
  children: React.ReactNode;
}) {
  return isCollapsed ? (
    <DropdownMenuItem>{children}</DropdownMenuItem>
  ) : (
    <li>{children}</li>
  );
}

export function SubRoutes({
  menuName,
  menuIcon: Icon,
  isCollapsed = false,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  return !isCollapsed ? (
    <Collapsible open={open} className="">
      <CollapsibleTrigger
        className="w-full"
        onClick={() => setOpen((old) => !old)}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <Icon className="text-white" />
            <span className="ml-4 font-semibold text-sm text-white">
              {menuName}
            </span>
          </div>
          <div
            className={` transition-all ${open ? "rotate-180" : "rotate-0"}`}
          >
            <RxChevronUp className="text-white" />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-2 space-y-3 border-l-[1px] border-l-zinc-700 pl-2 pt-2">
          {Children.map(children, (child) => (
            <SubRouteWrapper isCollapsed={isCollapsed}>{child}</SubRouteWrapper>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center">
        <Icon className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-800 border-none">
        {Children.map(children, (child) => (
          <DropdownMenuItem>
            <SubRouteWrapper isCollapsed={isCollapsed}>{child}</SubRouteWrapper>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
