import { ReactNode, useState } from "react";
import { RxChevronUp } from "react-icons/rx";
import { IconType } from "react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Props {
  menuName: string;
  menuIcon: IconType;
  children: ReactNode;
}

export function SubRoutes({ menuName, menuIcon: Icon, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open}>
      <CollapsibleTrigger
        className="w-full"
        onClick={() => setOpen((old) => !old)}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <Icon />
            <span className="ml-4 font-semibold text-sm">{menuName}</span>
          </div>
          <div
            className={` transition-all ${open ? "rotate-180" : "rotate-0"}`}
          >
            <RxChevronUp />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-2 space-y-3 border-l-[1px] border-l-zinc-700 pl-2 pt-2">
          {children}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
