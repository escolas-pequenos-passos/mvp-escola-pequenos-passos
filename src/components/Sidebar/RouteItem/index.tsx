import Link from "next/link";
import { MenuItem } from "../interfaces/menuItem";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props extends MenuItem {
  isCollapsed?: boolean;
}

export function RouteItem({
  icon: Icon,
  name,
  path,
  isCollapsed = false,
}: Props) {
  const routePath = usePathname();
  const isActive = routePath === path;

  return (
    <Link
      href={path}
      className={cn(
        `p-2 flex items-center rounded hover:cursor-pointer transition-all hover:bg-zinc-800 text-white`,
        {
          "justify-center": isCollapsed,
          "bg-zinc-800 text-light-green": isActive,
        }
      )}
    >
      {isCollapsed ? (
        <Icon size={16} />
      ) : (
        <>
          <Icon />
          <span className="ml-4 font-semibold text-sm text-center">{name}</span>
        </>
      )}
    </Link>
  );
}
